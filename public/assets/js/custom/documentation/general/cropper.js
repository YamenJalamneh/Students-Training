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

/***/ "./resources/src/js/custom/documentation/general/cropper.js":
/*!******************************************************************!*\
  !*** ./resources/src/js/custom/documentation/general/cropper.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n // Class definition\n\nvar KTCropperDemo = function () {\n  // Private functions\n  var initCropperDemo = function initCropperDemo() {\n    var image = document.getElementById('image');\n    var options = {\n      crop: function crop(event) {\n        document.getElementById('dataX').value = Math.round(event.detail.x);\n        document.getElementById('dataY').value = Math.round(event.detail.y);\n        document.getElementById('dataWidth').value = Math.round(event.detail.width);\n        document.getElementById('dataHeight').value = Math.round(event.detail.height);\n        document.getElementById('dataRotate').value = event.detail.rotate;\n        document.getElementById('dataScaleX').value = event.detail.scaleX;\n        document.getElementById('dataScaleY').value = event.detail.scaleY;\n        var lg = document.getElementById('cropper-preview-lg');\n        lg.innerHTML = '';\n        lg.appendChild(cropper.getCroppedCanvas({\n          width: 256,\n          height: 160\n        }));\n        var md = document.getElementById('cropper-preview-md');\n        md.innerHTML = '';\n        md.appendChild(cropper.getCroppedCanvas({\n          width: 128,\n          height: 80\n        }));\n        var sm = document.getElementById('cropper-preview-sm');\n        sm.innerHTML = '';\n        sm.appendChild(cropper.getCroppedCanvas({\n          width: 64,\n          height: 40\n        }));\n        var xs = document.getElementById('cropper-preview-xs');\n        xs.innerHTML = '';\n        xs.appendChild(cropper.getCroppedCanvas({\n          width: 32,\n          height: 20\n        }));\n      }\n    };\n    var cropper = new Cropper(image, options);\n    var buttons = document.getElementById('cropper-buttons');\n    var methods = buttons.querySelectorAll('[data-method]');\n    methods.forEach(function (button) {\n      button.addEventListener('click', function (e) {\n        var method = button.getAttribute('data-method');\n        var option = button.getAttribute('data-option');\n        var option2 = button.getAttribute('data-second-option');\n\n        try {\n          option = JSON.parse(option);\n        } catch (e) {}\n\n        var result;\n\n        if (!option2) {\n          result = cropper[method](option, option2);\n        } else if (option) {\n          result = cropper[method](option);\n        } else {\n          result = cropper[method]();\n        }\n\n        if (method === 'getCroppedCanvas') {\n          var modal = document.getElementById('getCroppedCanvasModal');\n          var modalBody = modal.querySelector('.modal-body');\n          modalBody.innerHTML = '';\n          modalBody.appendChild(result);\n        }\n\n        var input = document.querySelector('#putData');\n\n        try {\n          input.value = JSON.stringify(result);\n        } catch (e) {\n          if (!result) {\n            input.value = result;\n          }\n        }\n      });\n    }); // set aspect ratio option buttons\n\n    var radioOptions = document.getElementById('setAspectRatio').querySelectorAll('[name=\"aspectRatio\"]');\n    radioOptions.forEach(function (button) {\n      button.addEventListener('click', function (e) {\n        cropper.setAspectRatio(e.target.value);\n      });\n    }); // set view mode\n\n    var viewModeOptions = document.getElementById('viewMode').querySelectorAll('[name=\"viewMode\"]');\n    viewModeOptions.forEach(function (button) {\n      button.addEventListener('click', function (e) {\n        cropper.destroy();\n        cropper = new Cropper(image, Object.assign({}, options, {\n          viewMode: e.target.value\n        }));\n      });\n    });\n    var toggleoptions = document.getElementById('toggleOptionButtons').querySelectorAll('[type=\"checkbox\"]');\n    toggleoptions.forEach(function (checkbox) {\n      checkbox.addEventListener('click', function (e) {\n        var appendOption = {};\n        appendOption[e.target.getAttribute('name')] = e.target.checked;\n        options = Object.assign({}, options, appendOption);\n        cropper.destroy();\n        cropper = new Cropper(image, options);\n      });\n    });\n  };\n\n  return {\n    // public functions\n    init: function init() {\n      initCropperDemo();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTCropperDemo.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvY3JvcHBlci5qcy5qcyIsIm1hcHBpbmdzIjoiO0NBRUE7O0FBQ0EsSUFBSUEsYUFBYSxHQUFHLFlBQVk7QUFFL0I7QUFDQSxNQUFJQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQVk7QUFDakMsUUFBSUMsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBWjtBQUVBLFFBQUlDLE9BQU8sR0FBRztBQUNiQyxNQUFBQSxJQUFJLEVBQUUsY0FBVUMsS0FBVixFQUFpQjtBQUN0QkosUUFBQUEsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLEVBQWlDSSxLQUFqQyxHQUF5Q0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxDQUF4QixDQUF6QztBQUNBVCxRQUFBQSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsRUFBaUNJLEtBQWpDLEdBQXlDQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsS0FBSyxDQUFDSSxNQUFOLENBQWFFLENBQXhCLENBQXpDO0FBQ0FWLFFBQUFBLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixFQUFxQ0ksS0FBckMsR0FBNkNDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxLQUFLLENBQUNJLE1BQU4sQ0FBYUcsS0FBeEIsQ0FBN0M7QUFDQVgsUUFBQUEsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLEVBQXNDSSxLQUF0QyxHQUE4Q0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILEtBQUssQ0FBQ0ksTUFBTixDQUFhSSxNQUF4QixDQUE5QztBQUNBWixRQUFBQSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0NJLEtBQXRDLEdBQThDRCxLQUFLLENBQUNJLE1BQU4sQ0FBYUssTUFBM0Q7QUFDQWIsUUFBQUEsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLEVBQXNDSSxLQUF0QyxHQUE4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QUFZekIsS0FBWixFQUFtQkcsT0FBbkIsQ0FBVjtBQUNBLE9BTkQ7QUFPQSxLQVJEO0FBU0EsR0F4R0Q7O0FBMEdBLFNBQU87QUFDTjtBQUNBc0QsSUFBQUEsSUFBSSxFQUFFLGdCQUFZO0FBQ2pCMUQsTUFBQUEsZUFBZTtBQUNmO0FBSkssR0FBUDtBQU1BLENBbkhtQixFQUFwQixFQXFIQTs7O0FBQ0EyRCxNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVk7QUFDckM3RCxFQUFBQSxhQUFhLENBQUMyRCxJQUFkO0FBQ0EsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC9jcm9wcGVyLmpzP2M1ODMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG52YXIgS1RDcm9wcGVyRGVtbyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0Ly8gUHJpdmF0ZSBmdW5jdGlvbnNcclxuXHR2YXIgaW5pdENyb3BwZXJEZW1vID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dmFyIGltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlJyk7XHJcblxyXG5cdFx0dmFyIG9wdGlvbnMgPSB7XHJcblx0XHRcdGNyb3A6IGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRhWCcpLnZhbHVlID0gTWF0aC5yb3VuZChldmVudC5kZXRhaWwueCk7XHJcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGFZJykudmFsdWUgPSBNYXRoLnJvdW5kKGV2ZW50LmRldGFpbC55KTtcclxuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0YVdpZHRoJykudmFsdWUgPSBNYXRoLnJvdW5kKGV2ZW50LmRldGFpbC53aWR0aCk7XHJcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGFIZWlnaHQnKS52YWx1ZSA9IE1hdGgucm91bmQoZXZlbnQuZGV0YWlsLmhlaWdodCk7XHJcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGFSb3RhdGUnKS52YWx1ZSA9IGV2ZW50LmRldGFpbC5yb3RhdGU7XHJcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGFTY2FsZVgnKS52YWx1ZSA9IGV2ZW50LmRldGFpbC5zY2FsZVg7XHJcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGFTY2FsZVknKS52YWx1ZSA9IGV2ZW50LmRldGFpbC5zY2FsZVk7XHJcblxyXG5cdFx0XHRcdHZhciBsZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcm9wcGVyLXByZXZpZXctbGcnKTtcclxuXHRcdFx0XHRsZy5pbm5lckhUTUwgPSAnJztcclxuXHRcdFx0XHRsZy5hcHBlbmRDaGlsZChjcm9wcGVyLmdldENyb3BwZWRDYW52YXMoeyB3aWR0aDogMjU2LCBoZWlnaHQ6IDE2MCB9KSk7XHJcblxyXG5cdFx0XHRcdHZhciBtZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcm9wcGVyLXByZXZpZXctbWQnKTtcclxuXHRcdFx0XHRtZC5pbm5lckhUTUwgPSAnJztcclxuXHRcdFx0XHRtZC5hcHBlbmRDaGlsZChjcm9wcGVyLmdldENyb3BwZWRDYW52YXMoeyB3aWR0aDogMTI4LCBoZWlnaHQ6IDgwIH0pKTtcclxuXHJcblx0XHRcdFx0dmFyIHNtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nyb3BwZXItcHJldmlldy1zbScpO1xyXG5cdFx0XHRcdHNtLmlubmVySFRNTCA9ICcnO1xyXG5cdFx0XHRcdHNtLmFwcGVuZENoaWxkKGNyb3BwZXIuZ2V0Q3JvcHBlZENhbnZhcyh7IHdpZHRoOiA2NCwgaGVpZ2h0OiA0MCB9KSk7XHJcblxyXG5cdFx0XHRcdHZhciB4cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcm9wcGVyLXByZXZpZXcteHMnKTtcclxuXHRcdFx0XHR4cy5pbm5lckhUTUwgPSAnJztcclxuXHRcdFx0XHR4cy5hcHBlbmRDaGlsZChjcm9wcGVyLmdldENyb3BwZWRDYW52YXMoeyB3aWR0aDogMzIsIGhlaWdodDogMjAgfSkpO1xyXG5cdFx0XHR9LFxyXG5cdFx0fTtcclxuXHJcblx0XHR2YXIgY3JvcHBlciA9IG5ldyBDcm9wcGVyKGltYWdlLCBvcHRpb25zKTtcclxuXHJcblx0XHR2YXIgYnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcm9wcGVyLWJ1dHRvbnMnKTtcclxuXHRcdHZhciBtZXRob2RzID0gYnV0dG9ucy5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tZXRob2RdJyk7XHJcblx0XHRtZXRob2RzLmZvckVhY2goZnVuY3Rpb24gKGJ1dHRvbikge1xyXG5cdFx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdHZhciBtZXRob2QgPSBidXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLW1ldGhvZCcpO1xyXG5cdFx0XHRcdHZhciBvcHRpb24gPSBidXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLW9wdGlvbicpO1xyXG5cdFx0XHRcdHZhciBvcHRpb24yID0gYnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1zZWNvbmQtb3B0aW9uJyk7XHJcblxyXG5cdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRvcHRpb24gPSBKU09OLnBhcnNlKG9wdGlvbik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhdGNoIChlKSB7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR2YXIgcmVzdWx0O1xyXG5cdFx0XHRcdGlmICghb3B0aW9uMikge1xyXG5cdFx0XHRcdFx0cmVzdWx0ID0gY3JvcHBlclttZXRob2RdKG9wdGlvbiwgb3B0aW9uMik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYgKG9wdGlvbikge1xyXG5cdFx0XHRcdFx0cmVzdWx0ID0gY3JvcHBlclttZXRob2RdKG9wdGlvbik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0cmVzdWx0ID0gY3JvcHBlclttZXRob2RdKCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAobWV0aG9kID09PSAnZ2V0Q3JvcHBlZENhbnZhcycpIHtcclxuXHRcdFx0XHRcdHZhciBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZXRDcm9wcGVkQ2FudmFzTW9kYWwnKTtcclxuXHRcdFx0XHRcdHZhciBtb2RhbEJvZHkgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtYm9keScpO1xyXG5cdFx0XHRcdFx0bW9kYWxCb2R5LmlubmVySFRNTCA9ICcnO1xyXG5cdFx0XHRcdFx0bW9kYWxCb2R5LmFwcGVuZENoaWxkKHJlc3VsdCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR2YXIgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHV0RGF0YScpO1xyXG5cdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRpbnB1dC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhdGNoIChlKSB7XHJcblx0XHRcdFx0XHRpZiAoIXJlc3VsdCkge1xyXG5cdFx0XHRcdFx0XHRpbnB1dC52YWx1ZSA9IHJlc3VsdDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gc2V0IGFzcGVjdCByYXRpbyBvcHRpb24gYnV0dG9uc1xyXG5cdFx0dmFyIHJhZGlvT3B0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXRBc3BlY3RSYXRpbycpLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lPVwiYXNwZWN0UmF0aW9cIl0nKTtcclxuXHRcdHJhZGlvT3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChidXR0b24pIHtcclxuXHRcdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHRjcm9wcGVyLnNldEFzcGVjdFJhdGlvKGUudGFyZ2V0LnZhbHVlKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBzZXQgdmlldyBtb2RlXHJcblx0XHR2YXIgdmlld01vZGVPcHRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdNb2RlJykucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCJ2aWV3TW9kZVwiXScpO1xyXG5cdFx0dmlld01vZGVPcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKGJ1dHRvbikge1xyXG5cdFx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdGNyb3BwZXIuZGVzdHJveSgpO1xyXG5cdFx0XHRcdGNyb3BwZXIgPSBuZXcgQ3JvcHBlcihpbWFnZSwgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywgeyB2aWV3TW9kZTogZS50YXJnZXQudmFsdWUgfSkpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHZhciB0b2dnbGVvcHRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZU9wdGlvbkJ1dHRvbnMnKS5xdWVyeVNlbGVjdG9yQWxsKCdbdHlwZT1cImNoZWNrYm94XCJdJyk7XHJcblx0XHR0b2dnbGVvcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKGNoZWNrYm94KSB7XHJcblx0XHRcdGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHR2YXIgYXBwZW5kT3B0aW9uID0ge307XHJcblx0XHRcdFx0YXBwZW5kT3B0aW9uW2UudGFyZ2V0LmdldEF0dHJpYnV0ZSgnbmFtZScpXSA9IGUudGFyZ2V0LmNoZWNrZWQ7XHJcblx0XHRcdFx0b3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIGFwcGVuZE9wdGlvbik7XHJcblx0XHRcdFx0Y3JvcHBlci5kZXN0cm95KCk7XHJcblx0XHRcdFx0Y3JvcHBlciA9IG5ldyBDcm9wcGVyKGltYWdlLCBvcHRpb25zKTtcclxuXHRcdFx0fSlcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHQvLyBwdWJsaWMgZnVuY3Rpb25zXHJcblx0XHRpbml0OiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGluaXRDcm9wcGVyRGVtbygpO1xyXG5cdFx0fSxcclxuXHR9O1xyXG59KCk7XHJcblxyXG4vLyBPbiBkb2N1bWVudCByZWFkeVxyXG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uICgpIHtcclxuXHRLVENyb3BwZXJEZW1vLmluaXQoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJLVENyb3BwZXJEZW1vIiwiaW5pdENyb3BwZXJEZW1vIiwiaW1hZ2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib3B0aW9ucyIsImNyb3AiLCJldmVudCIsInZhbHVlIiwiTWF0aCIsInJvdW5kIiwiZGV0YWlsIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsInJvdGF0ZSIsInNjYWxlWCIsInNjYWxlWSIsImxnIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJjcm9wcGVyIiwiZ2V0Q3JvcHBlZENhbnZhcyIsIm1kIiwic20iLCJ4cyIsIkNyb3BwZXIiLCJidXR0b25zIiwibWV0aG9kcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJtZXRob2QiLCJnZXRBdHRyaWJ1dGUiLCJvcHRpb24iLCJvcHRpb24yIiwiSlNPTiIsInBhcnNlIiwicmVzdWx0IiwibW9kYWwiLCJtb2RhbEJvZHkiLCJxdWVyeVNlbGVjdG9yIiwiaW5wdXQiLCJzdHJpbmdpZnkiLCJyYWRpb09wdGlvbnMiLCJzZXRBc3BlY3RSYXRpbyIsInRhcmdldCIsInZpZXdNb2RlT3B0aW9ucyIsImRlc3Ryb3kiLCJPYmplY3QiLCJhc3NpZ24iLCJ2aWV3TW9kZSIsInRvZ2dsZW9wdGlvbnMiLCJjaGVja2JveCIsImFwcGVuZE9wdGlvbiIsImNoZWNrZWQiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/cropper.js\n");

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
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/general/cropper.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;