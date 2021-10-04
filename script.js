$(document).ready(() => {
  //multi select bootstrap

  // Change Page Direction
  $(".langSelect").on("change", function () {
    if (this.value === "en") {
      $("html").attr("dir", "ltr");
    } else {
      $("html").attr("dir", "rtl");
    }
    // change table direction on print
    $(".crew_info").attr("dir", $("html").attr("dir"));
  });

  // get the value of progress bar in home page
  let prog_vals = document.querySelectorAll("#progress_val");
  prog_vals.forEach((el) => {
    let item = el.parentElement.children.item(1).children[0];
    el.innerHTML = item.getAttribute("aria-valuenow") + "%";
    el.parentElement.children.item(1).children[0].style.width = el.innerHTML;
  });

  // print the table in crew page
  $(".print-btn").on("click", () => {
    // change table direction on print
    $(".crew_info").attr("dir", $("html").attr("dir"));
    $("#printArea").printThis({
      canvas: true,
      importCSS: true,
      importStyle: true,
      printContainer: true,
      copyTagClasses: true,
      loadCSS: [],
    });
  });

  // steps form
  var navListItems = $("div.setup-panel div a"),
    allWells = $(".setup-content"),
    allNextBtn = $(".nextBtn");

  allWells.hide();

  navListItems.click(function (e) {
    e.preventDefault();
    var $target = $($(this).attr("href")),
      $item = $(this);

    if (!$item.hasClass("disabled")) {
      navListItems.removeClass("btn-success").addClass("btn-default");
      $item.addClass("btn-success completed");
      allWells.hide();
      $target.show();
      $target.find("input:eq(0)").focus();
    } else {
      navListItems
        .removeClass("btn-success completed")
        .addClass("notCompleted");
    }
  });

  allNextBtn.click(function () {
    var curStep = $(this).closest(".setup-content"),
      curStepBtn = curStep.attr("id"),
      nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]')
        .parent()
        .next()
        .children("a"),
      curInputs = curStep.find(
        "input[type='text'],input[type='url'],input[type='date'],input[type='number'],textarea,select"
      ),
      isValid = true;

    $(".form-group").removeClass("has-error");
    for (var i = 0; i < curInputs.length; i++) {
      if (!curInputs[i].validity.valid) {
        isValid = false;
        $(curInputs[i]).closest(".form-group").addClass("has-error");
      }
    }

    if (isValid) nextStepWizard.removeAttr("disabled").trigger("click");
  });

  $("div.setup-panel div a.btn-success").trigger("click");

  // squares append in farm details page
  $("#append_squares").on("click", () => {
    let squares = $("#squares_num").val();
    $(".square_wrap").html("");
    for (let i = 1; i <= squares; i++) {
      $(".square_wrap").append(`<div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading${i}">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
            مربع ${i}
          </button>
        </h2>
        <div id="collapse${i}" class="accordion-collapse collapse" aria-labelledby="heading${i}" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-12 form-group mt-4">
                <label class="control-label">المساحة : </label>
                <input
                  type="number"
                  required="required"
                  class="form-control"
                />
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 form-group mt-4">
                <label class="control-label">عدد الصفوف : </label>
                <input
                  type="number"
                  required="required"
                  class="form-control"
                />
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 form-group mt-4">
                <label class="control-label">عدد الأعمدة : </label>
                <input
                  type="number"
                  required="required"
                  class="form-control"
                />
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 form-group mt-4">
                <label class="control-label">المهندسين : </label>
                <input
                  type="text"
                  required="required"
                  class="form-control"
                />
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 form-group mt-4">
                <label class="control-label">العمال : </label>
                <input
                  type="text"
                  required="required"
                  class="form-control"
                />
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 form-group mt-4">
                <label class="control-label">المشرفين : </label>
                <input
                  type="text"
                  required="required"
                  class="form-control"
                />
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 form-group mt-4">
                <label class="control-label">الصنف المزروع : </label>
                <input
                  type="text"
                  required="required"
                  class="form-control"
                />
              </div>
              <div class="col-12 form-group mt-4">
                  <div class="row mb-2">
                    <label class="control-label">نقطة 1 : </label>
                  </div>
                  <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <input
                        type="text"
                        required="required"
                        class="form-control"
                        placeholder="شمال"
                      />
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <input
                        type="text"
                        required="required"
                        class="form-control"
                        placeholder="درجة"
                      />
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <input
                        type="text"
                        required="required"
                        class="form-control"
                        placeholder="دقيقة"
                      />
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <input
                        type="text"
                        required="required"
                        class="form-control"
                        placeholder="ثانية"
                      />
                    </div>
                  </div>
                </div>
              <div class="col-12 form-group mt-3 justify-content-end">
                <div class="row">
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <input
                      type="text"
                      required="required"
                      class="form-control"
                      placeholder="شرق"
                    />
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <input
                      type="text"
                      required="required"
                      class="form-control"
                      placeholder="درجة"
                    />
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <input
                      type="text"
                      required="required"
                      class="form-control"
                      placeholder="دقيقة"
                    />
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <input
                      type="text"
                      required="required"
                      class="form-control"
                      placeholder="ثانية"
                    />
                  </div>
                </div>
              </div>
              <div class="col-12 form-group mt-4">
              <div class="row mb-2">
              <label class="control-label">نقطة 2 : </label>
            </div>
                  <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <input
                        type="text"
                        required="required"
                        class="form-control"
                        placeholder="شمال"
                      />
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <input
                        type="text"
                        required="required"
                        class="form-control"
                        placeholder="درجة"
                      />
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <input
                        type="text"
                        required="required"
                        class="form-control"
                        placeholder="دقيقة"
                      />
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <input
                        type="text"
                        required="required"
                        class="form-control"
                        placeholder="ثانية"
                      />
                    </div>
                </div>
              </div>
              <div class="col-12 form-group mt-3 justify-content-end">
                <div class="row">
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <input
                      type="text"
                      required="required"
                      class="form-control"
                      placeholder="شرق"
                    />
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <input
                      type="text"
                      required="required"
                      class="form-control"
                      placeholder="درجة"
                    />
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <input
                      type="text"
                      required="required"
                      class="form-control"
                      placeholder="دقيقة"
                    />
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <input
                      type="text"
                      required="required"
                      class="form-control"
                      placeholder="ثانية"
                    />
                  </div>
                </div>
              </div>
              <div class="col-12 form-group mt-4">
              <div class="row mb-2">
              <label class="control-label">نقطة 3 : </label>
            </div>
                  <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <input
                        type="text"
                        required="required"
                        class="form-control"
                        placeholder="شمال"
                      />
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <input
                        type="text"
                        required="required"
                        class="form-control"
                        placeholder="درجة"
                      />
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <input
                        type="text"
                        required="required"
                        class="form-control"
                        placeholder="دقيقة"
                      />
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <input
                        type="text"
                        required="required"
                        class="form-control"
                        placeholder="ثانية"
                      />
                    </div>
                </div>
              </div>
              <div class="col-12 form-group mt-3 justify-content-end">
                <div class="row">
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <input
                      type="text"
                      required="required"
                      class="form-control"
                      placeholder="شرق"
                    />
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <input
                      type="text"
                      required="required"
                      class="form-control"
                      placeholder="درجة"
                    />
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <input
                      type="text"
                      required="required"
                      class="form-control"
                      placeholder="دقيقة"
                    />
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <input
                      type="text"
                      required="required"
                      class="form-control"
                      placeholder="ثانية"
                    />
                  </div>
                </div>
              </div>
              <div class="col-12 form-group mt-4">
              <div class="row mb-2">
              <label class="control-label">نقطة 4 : </label>
            </div>
                  <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <input
                        type="text"
                        required="required"
                        class="form-control"
                        placeholder="شمال"
                      />
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <input
                        type="text"
                        required="required"
                        class="form-control"
                        placeholder="درجة"
                      />
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <input
                        type="text"
                        required="required"
                        class="form-control"
                        placeholder="دقيقة"
                      />
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <input
                        type="text"
                        required="required"
                        class="form-control"
                        placeholder="ثانية"
                      />
                    </div>
                </div>
              </div>
              <div class="col-12 form-group mt-3 justify-content-end">
                <div class="row">
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <input
                      type="text"
                      required="required"
                      class="form-control"
                      placeholder="شرق"
                    />
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <input
                      type="text"
                      required="required"
                      class="form-control"
                      placeholder="درجة"
                    />
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <input
                      type="text"
                      required="required"
                      class="form-control"
                      placeholder="دقيقة"
                    />
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <input
                      type="text"
                      required="required"
                      class="form-control"
                      placeholder="ثانية"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`);
    }
  });
  // watering lines append
  $("#append_water_lines").on("click", () => {
    let water_lines = $("#watering_lines_num").val();
    $(".watering_lines_wrap").html("");
    for (let i = 1; i <= water_lines; i++) {
      $(".watering_lines_wrap")
        .append(`<div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo${i}">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo${i}" aria-expanded="true" aria-controls="collapseTwo${i}">
            خط ${i}
          </button>
        </h2>
        <div id="collapseTwo${i}" class="accordion-collapse collapse" aria-labelledby="headingTwo${i}" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-12 form-group mt-4">
                <label class="control-label">نوع الخط : </label>
                <select class="form-select" required="required" aria-label="Default select example">
                  <option selected>اختيار نوع الخط</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 form-group mt-4">
                <label class="control-label">كمية المياة : </label>
                <input
                  type="number"
                  required="required"
                  class="form-control"
                />
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 form-group mt-4">
                <label class="control-label">الطول : </label>
                <input
                  type="number"
                  required="required"
                  class="form-control"
                />
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 form-group mt-4">
                <label class="control-label">نصف القطر/بوصة : </label>
                <input
                  type="number"
                  required="required"
                  class="form-control"
                />
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 form-group mt-4">
                <label class="control-label">المربعات التي يمر بها : </label>
                <input
                  type="number"
                  required="required"
                  class="form-control"
                />
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 form-group mt-4">
                <label class="control-label">سرعة المياه/البار : </label>
                <input
                  type="number"
                  required="required"
                  class="form-control"
                />
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 form-group mt-4">
                <label class="control-label">التكلفة : </label>
                <input
                  type="number"
                  required="required"
                  class="form-control"
                />
              </div>
              
              <div class="col-12 form-group mt-4">
                  <div class="row mb-2">
                    <label class="control-label">نقطة 1 : </label>
                  </div>
                  <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <input
                        type="text"
                        required="required"
                        class="form-control"
                        placeholder="شمال"
                      />
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <input
                        type="text"
                        required="required"
                        class="form-control"
                        placeholder="درجة"
                      />
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <input
                        type="text"
                        required="required"
                        class="form-control"
                        placeholder="دقيقة"
                      />
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <input
                        type="text"
                        required="required"
                        class="form-control"
                        placeholder="ثانية"
                      />
                    </div>
                </div>
              </div>
              <div class="col-12 form-group mt-3 justify-content-end">
                <div class="row justify-content-end">
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <input
                      type="text"
                      required="required"
                      class="form-control"
                      placeholder="شرق"
                    />
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <input
                      type="text"
                      required="required"
                      class="form-control"
                      placeholder="درجة"
                    />
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <input
                      type="text"
                      required="required"
                      class="form-control"
                      placeholder="دقيقة"
                    />
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <input
                      type="text"
                      required="required"
                      class="form-control"
                      placeholder="ثانية"
                    />
                  </div>
                </div>
              </div>
              <div class="col-12 form-group mt-4">
                  <div class="row mb-2">
                    <label class="control-label">نقطة 2 : </label>
                  </div>
                  <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <input
                        type="text"
                        required="required"
                        class="form-control"
                        placeholder="شمال"
                      />
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <input
                        type="text"
                        required="required"
                        class="form-control"
                        placeholder="درجة"
                      />
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <input
                        type="text"
                        required="required"
                        class="form-control"
                        placeholder="دقيقة"
                      />
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <input
                        type="text"
                        required="required"
                        class="form-control"
                        placeholder="ثانية"
                      />
                    </div>
                </div>
              </div>
              <div class="col-12 form-group mt-3 justify-content-end">
                <div class="row">
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <input
                      type="text"
                      required="required"
                      class="form-control"
                      placeholder="شرق"
                    />
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <input
                      type="text"
                      required="required"
                      class="form-control"
                      placeholder="درجة"
                    />
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <input
                      type="text"
                      required="required"
                      class="form-control"
                      placeholder="دقيقة"
                    />
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <input
                      type="text"
                      required="required"
                      class="form-control"
                      placeholder="ثانية"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`);
    }
  });
  // wells append
  $("#append_wells").on("click", () => {
    let water_lines = $("#wells_num").val();
    $(".wells_wrap").html("");
    for (let i = 1; i <= water_lines; i++) {
      $(".wells_wrap").append(`<div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree${i}">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree${i}" aria-expanded="true" aria-controls="collapseThree${i}">
            بئر ${i}
          </button>
        </h2>
        <div id="collapseThree${i}" class="accordion-collapse collapse" aria-labelledby="headingThree${i}" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-12 form-group mt-4">
                <label class="control-label">الحالة : </label>
                <select class="form-select" required="required" aria-label="Default select example">
                  <option selected>اختيار الحالة </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 form-group mt-4">
                <label class="control-label">تاريخ الحفر : </label>
                <input
                  type="date"
                  required="required"
                  class="form-control"
                />
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 form-group mt-4">
                <label class="control-label">العمق : </label>
                <input
                  type="number"
                  required="required"
                  class="form-control"
                />
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 form-group mt-4">
                <label class="control-label">قطر البئر : </label>
                <input
                  type="number"
                  required="required"
                  class="form-control"
                />
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 form-group mt-4">
                <label class="control-label">التكلفة : </label>
                <input
                  type="number"
                  required="required"
                  class="form-control"
                />
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 form-group mt-4">
                <label class="control-label">الحد الادني لكمية المياة : </label>
                <input
                  type="number"
                  required="required"
                  class="form-control"
                />
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 form-group mt-4">
                <label class="control-label">كمية المياة : </label>
                <input
                  type="number"
                  required="required"
                  class="form-control"
                />
              </div>
              <div class="col-12 form-group mt-4">
                  <div class="row mb-2">
                    <label class="control-label">نقطة 1 : </label>
                  </div>
                  <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <input
                        type="text"
                        required="required"
                        class="form-control"
                        placeholder="شمال"
                      />
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <input
                        type="text"
                        required="required"
                        class="form-control"
                        placeholder="درجة"
                      />
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <input
                        type="text"
                        required="required"
                        class="form-control"
                        placeholder="دقيقة"
                      />
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <input
                        type="text"
                        required="required"
                        class="form-control"
                        placeholder="ثانية"
                      />
                    </div>
                </div>
              </div>
              <div class="col-12 form-group mt-3 justify-content-end">
                <div class="row">
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <input
                      type="text"
                      required="required"
                      class="form-control"
                      placeholder="شرق"
                    />
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <input
                      type="text"
                      required="required"
                      class="form-control"
                      placeholder="درجة"
                    />
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <input
                      type="text"
                      required="required"
                      class="form-control"
                      placeholder="دقيقة"
                    />
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <input
                      type="text"
                      required="required"
                      class="form-control"
                      placeholder="ثانية"
                    />
                  </div>
                </div>
              </div>
              <div class="col-12 form-group mt-4">
              <div class="row mb-2">
              <label class="control-label">نقطة 2 : </label>
            </div>
                  <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <input
                        type="text"
                        required="required"
                        class="form-control"
                        placeholder="شمال"
                      />
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <input
                        type="text"
                        required="required"
                        class="form-control"
                        placeholder="درجة"
                      />
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <input
                        type="text"
                        required="required"
                        class="form-control"
                        placeholder="دقيقة"
                      />
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <input
                        type="text"
                        required="required"
                        class="form-control"
                        placeholder="ثانية"
                      />
                    </div>
                </div>
              </div>
              <div class="col-12 form-group mt-3 justify-content-end">
                <div class="row">
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <input
                      type="text"
                      required="required"
                      class="form-control"
                      placeholder="شرق"
                    />
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <input
                      type="text"
                      required="required"
                      class="form-control"
                      placeholder="درجة"
                    />
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <input
                      type="text"
                      required="required"
                      class="form-control"
                      placeholder="دقيقة"
                    />
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <input
                      type="text"
                      required="required"
                      class="form-control"
                      placeholder="ثانية"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`);
    }
  });

  // add material type and measure options
  $(".addMaterialType").on("click", () => {
    // material_type_select
    let material_txt = $(".material_type_text").val();
    if (material_txt.trim() != "") {
      $(".material_type_select").append(`<option>${material_txt}</option>`);
    }
  });
  $(".addMaterialMeasure").on("click", () => {
    // material_measure_select
    let material_mes = $(".material_measure_text").val();
    if (material_mes.trim() != "") {
      $(".material_measure_select").append(`<option>${material_mes}</option>`);
    }
  });
  // upload
  $(".upload").click(function () {
    $("input[type='file']").trigger("click");
  });

  $("input[type='file']").change(function () {
    $("#val").text(this.value.replace(/C:\\fakepath\\/i, ""));
  });

  $('.table').DataTable();
  // tabs  
  // function openTab(evt, tabName) {
  //   var i, tabcontent, tablinks;
  //   tabcontent = document.getElementsByClassName("tabcontent");
  //   for (i = 0; i < tabcontent.length; i++) {
  //     tabcontent[i].style.display = "none";
  //   }
  //   tablinks = document.getElementsByClassName("tablinks");
  //   for (i = 0; i < tablinks.length; i++) {
  //     tablinks[i].className = tablinks[i].className.replace(" active", "");
  //   }
  //   document.getElementById(tabName).style.display = "block";
  //   evt.currentTarget.className += " active";
  // }

  // google maps
  // function myMap() {
  //   var mapProp = {
  //     center: new google.maps.LatLng(51.508742, -0.12085),
  //     zoom: 5,
  //   };
  //   var map = new google.maps.Map(
  //     document.getElementById("googleMap"),
  //     mapProp
  //   );
  // }

  // $("select").selectpicker();

  // search in table
  // $(".form-control").on('input' , function () {
  //   var search = $(this).val();
  //   $("table tbody tr").hide();
  //   var len = $(
  //     'table tbody tr:not(.notfound) td:contains("' + search + '")'
  //   ).length;
  //   if (len > 0) {
  //     $('table tbody tr:not(.notfound) td:contains("' + search + '")').each(
  //       function () {
  //         $(this).closest("tr").show();
  //       }
  //     );
  //   } else {
  //     $(".notfound").show();
  //   }
  // });
  // $.expr[":"].contains = $.expr.createPseudo(function (arg) {
  //   return function (elem) {
  //     return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
  //   };
  // });
});
