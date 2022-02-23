function $(selector) {
  return document.querySelector(selector);
}
function $$(selector) {
  return document.querySelectorAll(selector);
}
function InitializeEventProject() {}
$$(".type__project").forEach((type) => {
  type.onclick = function () {
    $$(".type__project").forEach((_type) => {
      _type.classList.remove("active");
    });
    type.classList.add("active");
    let typeProject = type.dataset.filter;
    let listProject = $$(`.project`);
    console.log(listProject);
    if (typeProject == "all") {
      listProject.forEach((project) => {
        project.style.display = "block";
      });
      return;
    }
    listProject.forEach((project) => {
      project.style.display = "block";
      if (!project.classList.contains(typeProject)) {
        project.style.display = "none";
      }
    });
  };
});

function SkillInViewport() {
  var rect = $$(".skill-bar")[3].getBoundingClientRect();
  console.log("bottom: ", rect.bottom, "right: ", rect.right);
  console.log("height: ", window.innerHeight, "width: ", rect.right);
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
$("body").onscroll = function () {
  if (SkillInViewport()) {
    $(".wrap-skill").classList.add("effect");
  }
};
$$("li.tab").forEach((tab) => {
  tab.onclick = function () {
    $(".experience").classList.remove("active");
    $(".education").classList.remove("active");
    $$("li.tab").forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    if (tab.textContent == "My Experience") {
      $(".experience").classList.add("active");
      $(".education").classList.remove("active");
    } else {
      $(".education").classList.add("active");
      $(".experience").classList.remove("active");
    }
  };
});
