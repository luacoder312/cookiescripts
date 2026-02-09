function copyScript(btn) {
  const textarea = btn.previousElementSibling;
  textarea.select();
  document.execCommand("copy");
  btn.innerText = "✅ Copied!";
  setTimeout(() => btn.innerText = "📋 Copy Script", 1500);
}
