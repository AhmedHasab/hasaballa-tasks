window.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        const taskName = checkbox.closest("li")?.innerText.trim() || "مهمة بدون اسم";
        const taskId = "T-" + Date.now();

        fetch("https://script.google.com/macros/s/AKfycbw7FfOifzx8-ofws969YCTXso9qI3-i7dwPvTXPsv5SLBczQW9ix96xa2t7iYP155qe/exec", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            id: taskId,
            task: taskName,
            completed: true
          })
        })
        .then(res => res.text())
        .then(data => {
          console.log("✅ تم تسجيل المهمة:", taskName);
        })
        .catch(error => {
          console.error("❌ خطأ أثناء الإرسال:", error);
        });
      }
    });
  });
});
