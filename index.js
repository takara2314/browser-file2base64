const fileUploadElement = document.getElementById('file-upload');
const b64Area = document.getElementById('b64-area');

// ファイルのバイナリデータをBase64に変換する
const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
};

// ファイルが選択されたときに行う処理
const handleChangeFile = async (e) => {
  const file = e.target.files[0];

  // ファイルをBase64に変換
  const b64 = await fileToBase64(file);

  // Base64を表示
  b64Area.innerHTML = b64;
};

// ファイルが選択されたときのイベント
fileUploadElement.addEventListener('change', handleChangeFile);
