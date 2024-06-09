import React, { useCallback, useState } from 'react';
import {
  useNavigate
} from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import {
  Box,
  Button,
  Container,
  IconButton,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
  CircularProgress,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { setIpData } from 'store/ipDataSlice';
import { grey } from '@mui/material/colors';
import ClearIcon from '@mui/icons-material/Clear';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import formatFileSize from 'utils/formatFileSize';
import extractIPAddresses from 'utils/extractIPAddress';
import fetchIpInfo from 'api/fetchIPInfo';

function Home() {
  const navigation = useNavigate()
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback(acceptedFile => {
    const fileSizeInMB = acceptedFile[0].size / (1024 * 1024);
    if (fileSizeInMB > 1) {
      setErrorMessage('ファイルサイズが1MBを超えています。');
      return;
    }

    setSelectedFile(acceptedFile[0]);
    setErrorMessage('');
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      'text/plain': ['.txt','.log'],
    },
  });

  const handleDeleteFile = () => {
    setSelectedFile(null);
  };

  const handleUpload = async () => {
    const reader = new FileReader();
    reader.onload = async () => {
      const text = reader.result;
      const ips = extractIPAddresses(text);
      const ipCount = ips.reduce((acc, ip) => {
        acc[ip] = (acc[ip] || 0) + 1;
        return acc;
      }, {});

      const ipInfoData = [];
      setLoading(true);
      for (const ip of Object.keys(ipCount)) {
        const data = await fetchIpInfo(ip);
        if (data) {
          ipInfoData.push({
            ip,
            count: ipCount[ip],
            city: data.city,
            region: data.region,
            country: data.country,
            loc: data.loc,
          });
        }
      }
      setIpData(ipInfoData);
      dispatch(setIpData(ipInfoData));
      setLoading(false);
      navigation('/heatmap')
    };
    reader.readAsText(selectedFile);
  };

  return (
    <Container maxWidth='md'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* サイトの説明 */}
        <Typography variant='h6' color='text.primary' fontWeight='bold' sx={{ mt: '40px' }}>
          アクセスログからIPアドレスを抽出し，アクセス元をヒートマップで可視化するツール
        </Typography>

        {/* ドラッグ&ドロップゾーン */}
        <Paper
          {...getRootProps()}
          elevation={0}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '90%',
            height: isMobile ? '200px' : '300px',
            mt: '40px',
            padding: '20px',
            border: '2px dashed',
            borderColor: isDragActive ? 'primary.main' : 'secondary.main',
            backgroundColor: isDragActive ? grey[300] : 'inherit',
            '&:hover': {
              borderColor: 'primary.main',
            },
            cursor: 'pointer',
          }}
        >
          <input {...getInputProps()} />
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* クラウドアイコン */}
            <CloudUploadIcon
              color='secondary'
              sx={{ fontSize: { xs: '60px', sm: '100px' } }}
            />

            {/* アップロードの説明 */}
            <Typography variant='body1' color='text.primary' fontWeight='bold' sx={{ mt: { xs: '10px', sm: '20px' } }}>
              {isDragActive ? 'ドロップしてファイルを選択' : 'アップロードするファイルをここにドラッグ'}
            </Typography>

            {/* アップロードの仕様 */}
            <Typography variant='body2' color='text.secondary' sx={{ mt: { xs: '10px', sm: '20px' } }}>
              ・許可されるファイル形式： .log .txt<br />
              ・アップロードできるファイルは1つです<br />
              ・最大1MBまでアップロードできます
            </Typography>
          </Box>
        </Paper>

        {/* 選択されたファイルを表示 */}
        {selectedFile && (
          <Paper
            elevation={0}
            sx={{
              display: 'flex',
              alignItems: 'center',
              width:'90%',
              mt: '30px',
              p: { xs: '10px', sm: '20px' },
              bgcolor: 'inherit',
              border: '1px solid',
              borderColor: 'secondary.main',
            }}
          >
            {/* ファイルアイコン */}
            <InsertDriveFileIcon color='secondary' />

            {/* ファイル名 */}
            <Typography variant='body1' sx={{ flexGrow: 1, ml: '10px' }}>
              {selectedFile.name}
            </Typography>

            {/* ファイルサイズ */}
            <Typography variant='body2' sx={{ mr: '10px' }}>
              {formatFileSize(selectedFile.size)}
            </Typography>

            {/* 削除ボタン */}
            <IconButton onClick={handleDeleteFile}>
              <ClearIcon color='secondary' />
            </IconButton>
          </Paper>
        )}

        {/* ファイルのバリデーションによるエラーメッセージの表示 */}
        {errorMessage && (
          <Typography variant='body1' color='error' sx={{ mt: '20px' }}>
            {errorMessage}
          </Typography>
        )}

        {/* アップロードボタン */}
        <Button
          variant='contained'
          sx={{ mt: '30px' }}
          disabled={!selectedFile || loading}
          onClick={handleUpload}
        >
          アップロード
        </Button>

        {/* ローディング */}
        {loading && (
          <>
            <CircularProgress sx={{ mt: '30px' }} />
            <Typography variant='body1' color='text.secondary' sx={{ mt: '20px' }}>
              ヒートマップを作成しています...
            </Typography>
          </>
        )}
      </Box>
    </Container>
  );
}

export default Home;