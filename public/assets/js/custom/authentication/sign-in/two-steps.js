/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/authentication/sign-in/two-steps.js":
/*!*********************************************************************!*\
  !*** ./resources/src/js/custom/authentication/sign-in/two-steps.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n // Class Definition\n\nvar KTSigninTwoSteps = function () {\n  // Elements\n  var form;\n  var submitButton; // Handle form\n\n  var handleForm = function handleForm(e) {\n    // Handle form submit\n    submitButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      var validated = true;\n      var inputs = [].slice.call(form.querySelectorAll('input[maxlength=\"1\"]'));\n      inputs.map(function (input) {\n        if (input.value === '' || input.value.length === 0) {\n          validated = false;\n        }\n      });\n\n      if (validated === true) {\n        // Show loading indication\n        submitButton.setAttribute('data-kt-indicator', 'on'); // Disable button to avoid multiple click \n\n        submitButton.disabled = true; // Simulate ajax request\n\n        setTimeout(function () {\n          // Hide loading indication\n          submitButton.removeAttribute('data-kt-indicator'); // Enable button\n\n          submitButton.disabled = false; // Show message popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n\n          Swal.fire({\n            text: \"You have been successfully verified!\",\n            icon: \"success\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn btn-primary\"\n            }\n          }).then(function (result) {\n            if (result.isConfirmed) {\n              inputs.map(function (input) {\n                input.value = '';\n              });\n            }\n          });\n        }, 1000);\n      } else {\n        swal.fire({\n          text: \"Please enter valid securtiy code and try again.\",\n          icon: \"error\",\n          buttonsStyling: false,\n          confirmButtonText: \"Ok, got it!\",\n          customClass: {\n            confirmButton: \"btn fw-bold btn-light-primary\"\n          }\n        }).then(function () {\n          KTUtil.scrollTop();\n        });\n      }\n    });\n  }; // Public functions\n\n\n  return {\n    // Initialization\n    init: function init() {\n      form = document.querySelector('#kt_sing_in_two_steps_form');\n      submitButton = document.querySelector('#kt_sing_in_two_steps_submit');\n      handleForm();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTSigninTwoSteps.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9hdXRoZW50aWNhdGlvbi9zaWduLWluL3R3by1zdGVwcy5qcy5qcyIsIm1hcHBpbmdzIjoiO0NBRUE7O0FBQ0EsSUFBSUEsZ0JBQWdCLEdBQUcsWUFBVztBQUM5QjtBQUNBLE1BQUlDLElBQUo7QUFDQSxNQUFJQyxZQUFKLENBSDhCLENBSzlCOztBQUNBLE1BQUlDLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQVNDLENBQVQsRUFBWTtBQUN6QjtBQUNBRixJQUFBQSxZQUFZLENBQUNHLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFVBQVVELENBQVYsRUFBYTtBQUNoREEsTUFBQUEsQ0FBQyxDQUFDRSxjQUFGO0FBRUEsVUFBSUMsU0FBUyxHQUFHLElBQWhCO0FBRUEsVUFBSUMsTUFBTSxHQUFHLEdBQUdDLEtBQUgsQ0FBU0MsSUFBVCxDQUFjVCxJQUFJLENBQUNVLGdCQUFMLENBQXNCLHNCQUF0QixDQUFkLENBQWI7QUFDQUgsTUFBQUEsTUFBTSxDQUFDSSxHQUFQLENBQVcsVUFBVUMsS0FBVixFQUFpQjtBQUN4QixZQUFJQSxLQUFLLENBQUNDLEtBQU4sS0FBZ0IsRUFBaEIsSUFBc0JELEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLEtBQXVCLENBQWpELEVBQW9EO0FBQ2hEUixVQUFBQSxTQUFTLEdBQUcsS0FBWjtBQUNIO0FBQ0osT0FKRDs7QUFNQSxVQUFJQSxTQUFTLEtBQUssSUFBbEIsRUFBd0I7QUFDcEI7QUFDQUwsUUFBQUEsWUFBWSxDQUFDYyxZQUFiLENBQTBCLG1CQUExQixFQUErQyxJQUEvQyxFQUZvQixDQUlwQjs7QUFDQWQsUUFBQUEsWUFBWSxDQUFDZSxRQUFiLEdBQXdCLElBQXhCLENBTG9CLENBT3BCOztBQUNBQyxRQUFBQSxVQUFVLENBQUMsWUFBVztBQUNsQjtBQUNBaEIsVUFBQUEsWUFBWSxDQUFDaUIsZUFBYixDQUE2QixtQkFBN0IsRUFGa0IsQ0FJbEI7O0FBQ0FqQixVQUFBQSxZQUFZLENBQUNlLFFBQWIsR0FBd0IsS0FBeEIsQ0FMa0IsQ0FPbEI7O0FBQ0FHLFVBQUFBLElBQUksQ0FBQ0MsSUFBTCxDQUFVO0FBQ05DLFlBQUFBLElBQUksRUFBRSxzQ0FEQTtBQUVOQyxZQUFBQSxJQUFJLEVBQUUsU0FGQTtBQUdOQyxZQUFBQSxjQUFjLEVBQUUsS0FIVjtBQUlOQyxZQUFBQSxpQkFBaUIsRUFBRSxhQUpiO0FBS05DLFlBQUFBLFdBQVcsRUFBRTtBQUNUQyxjQUFBQSxhQUFhLEVBQUU7QUFETjtBQUxQLFdBQVYsRUFRR0MsSUFSSCxDQVFRLFVBQVVDLE1BQVYsRUFBa0I7QUFDdEIsZ0JBQUlBLE1BQU0sQ0FBQ0MsV0FBWCxFQUF3QjtBQUNwQnRCLGNBQUFBLE1BQU0sQ0FBQ0ksR0FBUCxDQUFXLFVBQVVDLEtBQVYsRUFBaUI7QUFDeEJBLGdCQUFBQSxLQUFLLENBQUNDLEtBQU4sR0FBYyxFQUFkO0FBQ0gsZUFGRDtBQUdIO0FBQ0osV0FkRDtBQWVILFNBdkJTLEVBdUJQLElBdkJPLENBQVY7QUF3QkgsT0FoQ0QsTUFnQ087QUFDSGlCLFFBQUFBLElBQUksQ0FBQ1YsSUFBTCxDQUFVO0FBQ05DLFVBQUFBLElBQUksRUFBRSxpREFEQTtBQUVOQyxVQUFBQSxJQUFJLEVBQUUsT0FGQTtBQUdOQyxVQUFBQSxjQUFjLEVBQUUsS0FIVjtBQUlOQyxVQUFBQSxpQkFBaUIsRUFBRSxhQUpiO0FBS05DLFVBQUFBLFdBQVcsRUFBRTtBQUNUQyxZQUFBQSxhQUFhLEVBQUU7QUFETjtBQUxQLFNBQVYsRUFRR0MsSUFSSCxDQVFRLFlBQVc7QUFDZkksVUFBQUEsTUFBTSxDQUFDQyxTQUFQO0FBQ0gsU0FWRDtBQVdIO0FBQ0osS0F6REQ7QUEwREgsR0E1REQsQ0FOOEIsQ0FvRTlCOzs7QUFDQSxTQUFPO0FBQ0g7QUFDQUMsSUFBQUEsSUFBSSxFQUFFLGdCQUFXO0FBQ2JqQyxNQUFBQSxJQUFJLEdBQUdrQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsNEJBQXZCLENBQVA7QUFDQWxDLE1BQUFBLFlBQVksR0FBR2lDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qiw4QkFBdkIsQ0FBZjtBQUVBakMsTUFBQUEsVUFBVTtBQUNiO0FBUEUsR0FBUDtBQVNILENBOUVzQixFQUF2QixFQWdGQTs7O0FBQ0E2QixNQUFNLENBQUNLLGtCQUFQLENBQTBCLFlBQVc7QUFDakNyQyxFQUFBQSxnQkFBZ0IsQ0FBQ2tDLElBQWpCO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL2F1dGhlbnRpY2F0aW9uL3NpZ24taW4vdHdvLXN0ZXBzLmpzP2NjMjMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBDbGFzcyBEZWZpbml0aW9uXHJcbnZhciBLVFNpZ25pblR3b1N0ZXBzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBFbGVtZW50c1xyXG4gICAgdmFyIGZvcm07XHJcbiAgICB2YXIgc3VibWl0QnV0dG9uO1xyXG5cclxuICAgIC8vIEhhbmRsZSBmb3JtXHJcbiAgICB2YXIgaGFuZGxlRm9ybSA9IGZ1bmN0aW9uKGUpIHsgICAgICAgIFxyXG4gICAgICAgIC8vIEhhbmRsZSBmb3JtIHN1Ym1pdFxyXG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB2YWxpZGF0ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgdmFyIGlucHV0cyA9IFtdLnNsaWNlLmNhbGwoZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFttYXhsZW5ndGg9XCIxXCJdJykpO1xyXG4gICAgICAgICAgICBpbnB1dHMubWFwKGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LnZhbHVlID09PSAnJyB8fCBpbnB1dC52YWx1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsaWRhdGVkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTaG93IGxvYWRpbmcgaW5kaWNhdGlvblxyXG4gICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1rdC1pbmRpY2F0b3InLCAnb24nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBEaXNhYmxlIGJ1dHRvbiB0byBhdm9pZCBtdWx0aXBsZSBjbGljayBcclxuICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU2ltdWxhdGUgYWpheCByZXF1ZXN0XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEhpZGUgbG9hZGluZyBpbmRpY2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1rdC1pbmRpY2F0b3InKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRW5hYmxlIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBTaG93IG1lc3NhZ2UgcG9wdXAuIEZvciBtb3JlIGluZm8gY2hlY2sgdGhlIHBsdWdpbidzIG9mZmljaWFsIGRvY3VtZW50YXRpb246IGh0dHBzOi8vc3dlZXRhbGVydDIuZ2l0aHViLmlvL1xyXG4gICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiWW91IGhhdmUgYmVlbiBzdWNjZXNzZnVsbHkgdmVyaWZpZWQhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIk9rLCBnb3QgaXQhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5pc0NvbmZpcm1lZCkgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0cy5tYXAoZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTsgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiUGxlYXNlIGVudGVyIHZhbGlkIHNlY3VydGl5IGNvZGUgYW5kIHRyeSBhZ2Fpbi5cIixcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIk9rLCBnb3QgaXQhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gZnctYm9sZCBidG4tbGlnaHQtcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBLVFV0aWwuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFB1YmxpYyBmdW5jdGlvbnNcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gSW5pdGlhbGl6YXRpb25cclxuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNrdF9zaW5nX2luX3R3b19zdGVwc19mb3JtJyk7XHJcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNrdF9zaW5nX2luX3R3b19zdGVwc19zdWJtaXQnKTtcclxuXHJcbiAgICAgICAgICAgIGhhbmRsZUZvcm0oKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KCk7XHJcblxyXG4vLyBPbiBkb2N1bWVudCByZWFkeVxyXG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uKCkge1xyXG4gICAgS1RTaWduaW5Ud29TdGVwcy5pbml0KCk7XHJcbn0pOyJdLCJuYW1lcyI6WyJLVFNpZ25pblR3b1N0ZXBzIiwiZm9ybSIsInN1Ym1pdEJ1dHRvbiIsImhhbmRsZUZvcm0iLCJlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByZXZlbnREZWZhdWx0IiwidmFsaWRhdGVkIiwiaW5wdXRzIiwic2xpY2UiLCJjYWxsIiwicXVlcnlTZWxlY3RvckFsbCIsIm1hcCIsImlucHV0IiwidmFsdWUiLCJsZW5ndGgiLCJzZXRBdHRyaWJ1dGUiLCJkaXNhYmxlZCIsInNldFRpbWVvdXQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJTd2FsIiwiZmlyZSIsInRleHQiLCJpY29uIiwiYnV0dG9uc1N0eWxpbmciLCJjb25maXJtQnV0dG9uVGV4dCIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsInRoZW4iLCJyZXN1bHQiLCJpc0NvbmZpcm1lZCIsInN3YWwiLCJLVFV0aWwiLCJzY3JvbGxUb3AiLCJpbml0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/authentication/sign-in/two-steps.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/authentication/sign-in/two-steps.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;