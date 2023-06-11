export const setFormElementsDisabled = (formId) => {
  const formInput = document.getElementById(formId).elements;
  const formInputElements = Array.from(formInput);
  formInputElements.map((element) => {
    if (element.tagName.toLowerCase() == "input" ||element.tagName.toLowerCase() == "select") {
      element.setAttribute("disabled", "");
    }
    
  });
};

export const setFormElementsEnabled = (formId) => {
  const formInput = document.getElementById(formId).elements;
  const formInputElements = Array.from(formInput);
  formInputElements.map((element) => {
    if (element.tagName.toLowerCase() == "input" ||element.tagName.toLowerCase() == "select") {
      element.removeAttribute("disabled");
    }
    
  });
};


export const resetForm=(formId)=>{
  document.getElementById(formId).reset();
}