// script.js
/*
$(function() {
    
    // DRAGGABLE
    // https://jqueryui.com/draggable/
    
    $('.box').draggable();
    $('#box1').draggable({ scroll: true, revert: "invalid" });
    $('#box2').draggable({ axis: "x" });
    $('#box3').draggable({ axis: "y" });
    $('#box4').draggable({ containment: ".container", revert: "invalid" });
   
    // DROPPABLE
    // https://jqueryui.com/droppable/
    
    $('#droppable').droppable({
        accept: '#box1',
        drop: function() {
            $(this).text("when a box got attitude, drop it like it's hot!");
        }
    });
    
    // SORTABLE
    // https://jqueryui.com/sortable/
    
    $('#sortable').sortable({ connectWith: "#sortableToo", placeholder: "placeholderBox" });
    $('#sortableToo').sortable({ connectWith: "#sortable", placeholder: "placeholderBox" });
    
    // ACCORDION
    // https://jqueryui.com/accordion/
    
    $('#accordion').accordion({ collapsible: true, heightStyle: "content" });
    
    // DATEPICKER
    // https://jqueryui.com/datepicker/
    
    $('.date').datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,
        showButtonPanel: true,
        changeMonth: false,
        changeYear: false,
        numberOfMonths: 2,
        minDate: -1,
        maxDate: "+1W +5D"
    });
    
    // TO DO LIST
    
    $('#todoList ul').sortable({
        items: "li:not('.listTitle, .addItem')",
        connectWith: "ul",
        dropOnEmpty: true,
        placeholder: "emptySpace"
    });
    
    $('input').keydown(function(e) {
        if(e.keyCode == 13) {
            var item = $(this).val();
            
            $(this).parent().parent().append('<li>' + item + '</li>');
            $(this).val('');
        }
    });
    
    $('#trash').droppable({
        drop: function(event, ui) {
            ui.draggable.remove();
        }
    });
    
});

*/

/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project



   /* //gets the button by ID from your HTML element
    const themeBtn = document.getElementById("theme-btn");
    //when you click that button
    themeBtn.onclick = () => {
    //the default class "fa-moon" switches to "fa-sun" on toggle
      themeBtn.classList.toggle("fa-sun");
    //after the switch on toggle, if your button contains "fa-sun" class
      if (themeBtn.classList.contains("fa-sun")) {
    //onclicking themeBtn, the changeTheme styling will be applied to the body of your HTML
        document.body.classList.add("dark-mode");
      } else {
    // onclicking themeBtn, applied changeTheme styling will be removed
        document.body.classList.remove("dark-mode");
      }
    } 

   /* document.getElementById('theme-btn').addEventListener('click',()=>{
        if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
            document.documentElement.setAttribute('data-bs-theme','light')
        }
        else {
            document.documentElement.setAttribute('data-bs-theme','dark')
        }
    }) */

        
/**
* Utility function to calculate the current theme setting.
* Look for a local storage value.
* Fall back to system setting.
* Fall back to light mode.
*/
function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
    if (localStorageTheme !== null) {
      return localStorageTheme;
    }
  
    if (systemSettingDark.matches) {
      return "dark";
    }
  
    return "light";
  }
  
  /**
  * Utility function to update the button text and aria-label.
  */
  function updateButton({ buttonEl, isDark }) {
    const newCta = isDark ? "light" : "dark";
    // use an aria-label if you are omitting text on the button
    // and using a sun/moon icon, for example
    buttonEl.setAttribute("aria-label", newCta);
    buttonEl.innerText = newCta;
  }
  
  /**
  * Utility function to update the theme setting on the html tag
  */
  function updateThemeOnHtmlEl({ theme }) {
    document.querySelector("html").setAttribute("data-theme", theme);
  }
  
  
  /**
  * On page load:
  */
  
  /**
  * 1. Grab what we need from the DOM and system settings on page load
  */
  const button = document.querySelector("[data-theme-toggle]");
  const localStorageTheme = localStorage.getItem("theme");
  const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
  
  /**
  * 2. Work out the current site settings
  */
  let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });
  
  /**
  * 3. Update the theme setting and button text accoridng to current settings
  */
  updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
  updateThemeOnHtmlEl({ theme: currentThemeSetting });
  
  /**
  * 4. Add an event listener to toggle the theme
  */
  button.addEventListener("click", (event) => {
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark";
  
    localStorage.setItem("theme", newTheme);
    updateButton({ buttonEl: button, isDark: newTheme === "dark" });
    updateThemeOnHtmlEl({ theme: newTheme });
  
    currentThemeSetting = newTheme;
  });













