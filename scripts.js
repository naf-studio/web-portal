function showContent(index) {
  // Hide all content items
  const contentItems = document.querySelectorAll('.content-item');
  contentItems.forEach((item) => {
    item.style.display = 'none';
  });

  // Show the selected content item
  const selectedContent = document.getElementById(`content${index}`);
  selectedContent.style.display = 'block';
}

function toggleTaskbar() {
  const taskbar = document.getElementById('taskbar');
  const showButton = document.getElementById('show-taskbar-btn');
  const content = document.querySelector('.content');
  const isTaskbarHidden = taskbar.style.transform === 'translateX(-100%)';

  if (isTaskbarHidden) {
    taskbar.style.transform = 'translateX(0)';
    showButton.style.display = 'none';
    content.style.marginLeft = 'calc(200px + 3dvh)'; // Điều chỉnh margin để tạo khoảng cách cho taskbar cộng với 3dvh
  } else {
    taskbar.style.transform = 'translateX(-100%)';
    showButton.style.display = 'block';
    content.style.marginLeft = '3dvh'; // Đảm bảo margin là 3dvh khi taskbar bị ẩn
  }
}

// Đảm bảo taskbar ban đầu được hiển thị
document.getElementById('taskbar').style.transform = 'translateX(0)';

// Đảm bảo nội dung cách thanh taskbar một khoảng 3dvh khi trang mới tải
document.querySelector('.content').style.marginLeft = '30dvh';

function copyText() {
  const textToCopy = 'naf.com';
  const tempInput = document.createElement('input');
  tempInput.style.position = 'absolute';
  tempInput.style.left = '-9999px';
  tempInput.value = textToCopy;
  document.body.appendChild(tempInput);
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); // Cho các thiết bị di động
  document.execCommand('copy');
  document.body.removeChild(tempInput);
  alert('Copied: ' + textToCopy);
}
