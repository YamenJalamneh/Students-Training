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

/***/ "./resources/src/js/custom/documentation/forms/select2.js":
/*!****************************************************************!*\
  !*** ./resources/src/js/custom/documentation/forms/select2.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n // Class definition\n\nvar KTFormsSelect2Demo = function () {\n  // Private functions\n  var exampleCountry = function exampleCountry() {\n    // Format options\n    var format = function format(item) {\n      if (!item.id) {\n        return item.text;\n      }\n\n      var url = hostUrl + 'media/' + item.element.getAttribute('data-kt-select2-country');\n      var img = $(\"<img>\", {\n        \"class\": \"rounded-circle me-2\",\n        width: 26,\n        src: url\n      });\n      var span = $(\"<span>\", {\n        text: \" \" + item.text\n      });\n      span.prepend(img);\n      return span;\n    }; // Init Select2 --- more info: https://select2.org/\n\n\n    $('#kt_docs_select2_country').select2({\n      templateResult: function templateResult(item) {\n        return format(item);\n      }\n    });\n  };\n\n  var exampleUsers = function exampleUsers() {\n    // Format options\n    var format = function format(item) {\n      if (!item.id) {\n        return item.text;\n      }\n\n      var url = hostUrl + 'media/' + item.element.getAttribute('data-kt-select2-user');\n      var img = $(\"<img>\", {\n        \"class\": \"rounded-circle me-2\",\n        width: 26,\n        src: url\n      });\n      var span = $(\"<span>\", {\n        text: \" \" + item.text\n      });\n      span.prepend(img);\n      return span;\n    }; // Init Select2 --- more info: https://select2.org/\n\n\n    $('#kt_docs_select2_users').select2({\n      templateResult: function templateResult(item) {\n        return format(item);\n      }\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleCountry();\n      exampleUsers();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFormsSelect2Demo.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2Zvcm1zL3NlbGVjdDIuanMuanMiLCJtYXBwaW5ncyI6IjtDQUVBOztBQUNBLElBQUlBLGtCQUFrQixHQUFHLFlBQVk7QUFDakM7QUFDQSxNQUFJQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQVk7QUFDN0I7QUFDQSxRQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxJQUFELEVBQVU7QUFDckIsVUFBSSxDQUFDQSxJQUFJLENBQUNDLEVBQVYsRUFBYztBQUNWLGVBQU9ELElBQUksQ0FBQ0UsSUFBWjtBQUNIOztBQUVELFVBQUlDLEdBQUcsR0FBR0MsT0FBTyxHQUFHLFFBQVYsR0FBcUJKLElBQUksQ0FBQ0ssT0FBTCxDQUFhQyxZQUFiLENBQTBCLHlCQUExQixDQUEvQjtBQUNBLFVBQUlDLEdBQUcsR0FBR0MsQ0FBQyxDQUFDLE9BQUQsRUFBVTtBQUNqQixpQkFBTyxxQkFEVTtBQUVqQkMsUUFBQUEsS0FBSyxFQUFFLEVBRlU7QUFHakJDLFFBQUFBLEdBQUcsRUFBRVA7QUFIWSxPQUFWLENBQVg7QUFLQSxVQUFJUSxJQUFJLEdBQUdILENBQUMsQ0FBQyxRQUFELEVBQVc7QUFDbkJOLFFBQUFBLElBQUksRUFBRSxNQUFNRixJQUFJLENBQUNFO0FBREUsT0FBWCxDQUFaO0FBR0FTLE1BQUFBLElBQUksQ0FBQ0MsT0FBTCxDQUFhTCxHQUFiO0FBQ0EsYUFBT0ksSUFBUDtBQUNILEtBaEJELENBRjZCLENBb0I3Qjs7O0FBQ0FILElBQUFBLENBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCSyxPQUE5QixDQUFzQztBQUNsQ0MsTUFBQUEsY0FBYyxFQUFFLHdCQUFVZCxJQUFWLEVBQWdCO0FBQzVCLGVBQU9ELE1BQU0sQ0FBQ0MsSUFBRCxDQUFiO0FBQ0g7QUFIaUMsS0FBdEM7QUFLSCxHQTFCRDs7QUE0QkEsTUFBTWUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBWTtBQUM3QjtBQUNBLFFBQU1oQixNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxJQUFELEVBQVU7QUFDckIsVUFBSSxDQUFDQSxJQUFJLENBQUNDLEVBQVYsRUFBYztBQUNWLGVBQU9ELElBQUksQ0FBQ0UsSUFBWjtBQUNIOztBQUVELFVBQUlDLEdBQUcsR0FBR0MsT0FBTyxHQUFHLFFBQVYsR0FBcUJKLElBQUksQ0FBQ0ssT0FBTCxDQUFhQyxZQUFiLENBQTBCLHNCQUExQixDQUEvQjtBQUNBLFVBQUlDLEdBQUcsR0FBR0MsQ0FBQyxDQUFDLE9BQUQsRUFBVTtBQUNqQixpQkFBTyxxQkFEVTtBQUVqQkMsUUFBQUEsS0FBSyxFQUFFLEVBRlU7QUFHakJDLFFBQUFBLEdBQUcsRUFBRVA7QUFIWSxPQUFWLENBQVg7QUFLQSxVQUFJUSxJQUFJLEdBQUdILENBQUMsQ0FBQyxRQUFELEVBQVc7QUFDbkJOLFFBQUFBLElBQUksRUFBRSxNQUFNRixJQUFJLENBQUNFO0FBREUsT0FBWCxDQUFaO0FBR0FTLE1BQUFBLElBQUksQ0FBQ0MsT0FBTCxDQUFhTCxHQUFiO0FBQ0EsYUFBT0ksSUFBUDtBQUNILEtBaEJELENBRjZCLENBb0I3Qjs7O0FBQ0FILElBQUFBLENBQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCSyxPQUE1QixDQUFvQztBQUNoQ0MsTUFBQUEsY0FBYyxFQUFFLHdCQUFVZCxJQUFWLEVBQWdCO0FBQzVCLGVBQU9ELE1BQU0sQ0FBQ0MsSUFBRCxDQUFiO0FBQ0g7QUFIK0IsS0FBcEM7QUFLSCxHQTFCRDs7QUE0QkEsU0FBTztBQUNIO0FBQ0FnQixJQUFBQSxJQUFJLEVBQUUsZ0JBQVk7QUFDZGxCLE1BQUFBLGNBQWM7QUFDZGlCLE1BQUFBLFlBQVk7QUFDZjtBQUxFLEdBQVA7QUFPSCxDQWpFd0IsRUFBekIsRUFtRUE7OztBQUNBRSxNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVk7QUFDbENyQixFQUFBQSxrQkFBa0IsQ0FBQ21CLElBQW5CO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZm9ybXMvc2VsZWN0Mi5qcz9hOWM0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG52YXIgS1RGb3Jtc1NlbGVjdDJEZW1vID0gZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcclxuICAgIHZhciBleGFtcGxlQ291bnRyeSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBGb3JtYXQgb3B0aW9uc1xyXG4gICAgICAgIGNvbnN0IGZvcm1hdCA9IChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghaXRlbS5pZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0udGV4dDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHVybCA9IGhvc3RVcmwgKyAnbWVkaWEvJyArIGl0ZW0uZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEta3Qtc2VsZWN0Mi1jb3VudHJ5Jyk7XHJcbiAgICAgICAgICAgIHZhciBpbWcgPSAkKFwiPGltZz5cIiwge1xyXG4gICAgICAgICAgICAgICAgY2xhc3M6IFwicm91bmRlZC1jaXJjbGUgbWUtMlwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI2LFxyXG4gICAgICAgICAgICAgICAgc3JjOiB1cmxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciBzcGFuID0gJChcIjxzcGFuPlwiLCB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIiBcIiArIGl0ZW0udGV4dFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc3Bhbi5wcmVwZW5kKGltZyk7XHJcbiAgICAgICAgICAgIHJldHVybiBzcGFuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSW5pdCBTZWxlY3QyIC0tLSBtb3JlIGluZm86IGh0dHBzOi8vc2VsZWN0Mi5vcmcvXHJcbiAgICAgICAgJCgnI2t0X2RvY3Nfc2VsZWN0Ml9jb3VudHJ5Jykuc2VsZWN0Mih7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlUmVzdWx0OiBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvcm1hdChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGV4YW1wbGVVc2VycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBGb3JtYXQgb3B0aW9uc1xyXG4gICAgICAgIGNvbnN0IGZvcm1hdCA9IChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghaXRlbS5pZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0udGV4dDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHVybCA9IGhvc3RVcmwgKyAnbWVkaWEvJyArIGl0ZW0uZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEta3Qtc2VsZWN0Mi11c2VyJyk7XHJcbiAgICAgICAgICAgIHZhciBpbWcgPSAkKFwiPGltZz5cIiwge1xyXG4gICAgICAgICAgICAgICAgY2xhc3M6IFwicm91bmRlZC1jaXJjbGUgbWUtMlwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI2LFxyXG4gICAgICAgICAgICAgICAgc3JjOiB1cmxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciBzcGFuID0gJChcIjxzcGFuPlwiLCB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIiBcIiArIGl0ZW0udGV4dFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc3Bhbi5wcmVwZW5kKGltZyk7XHJcbiAgICAgICAgICAgIHJldHVybiBzcGFuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSW5pdCBTZWxlY3QyIC0tLSBtb3JlIGluZm86IGh0dHBzOi8vc2VsZWN0Mi5vcmcvXHJcbiAgICAgICAgJCgnI2t0X2RvY3Nfc2VsZWN0Ml91c2VycycpLnNlbGVjdDIoe1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZVJlc3VsdDogZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmb3JtYXQoaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGV4YW1wbGVDb3VudHJ5KCk7XHJcbiAgICAgICAgICAgIGV4YW1wbGVVc2VycygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0oKTtcclxuXHJcbi8vIE9uIGRvY3VtZW50IHJlYWR5XHJcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgS1RGb3Jtc1NlbGVjdDJEZW1vLmluaXQoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJLVEZvcm1zU2VsZWN0MkRlbW8iLCJleGFtcGxlQ291bnRyeSIsImZvcm1hdCIsIml0ZW0iLCJpZCIsInRleHQiLCJ1cmwiLCJob3N0VXJsIiwiZWxlbWVudCIsImdldEF0dHJpYnV0ZSIsImltZyIsIiQiLCJ3aWR0aCIsInNyYyIsInNwYW4iLCJwcmVwZW5kIiwic2VsZWN0MiIsInRlbXBsYXRlUmVzdWx0IiwiZXhhbXBsZVVzZXJzIiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/forms/select2.js\n");

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
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/forms/select2.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;