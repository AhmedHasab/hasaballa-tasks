window.addEventListener("DOMContentLoaded", () => {
  // ابحث عن كل الأزرار اللي فيها علامة ✔️
  const buttons = document.querySelectorAll("button");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const taskName = button.parentElement.querySelector("span").textContent.trim();
      const taskId = "T-" + Date.now(); // رقم عشوائي فريد لكل مهمة

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
      .then(response => response.text())
      .then(data => {
        console.log("✅ تم إرسال المهمة:", taskName);
      })
      .catch(error => {
        console.error("❌ خطأ أثناء الإرسال:", error);
      });
    });
  });
});
