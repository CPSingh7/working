"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "src_components_Sections_SectionMagazine1_tsx";
exports.ids = ["src_components_Sections_SectionMagazine1_tsx"];
exports.modules = {

/***/ "./src/components/Card6/Card6.tsx":
/*!****************************************!*\
  !*** ./src/components/Card6/Card6.tsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_PostCardMeta_PostCardMeta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/PostCardMeta/PostCardMeta */ \"./src/components/PostCardMeta/PostCardMeta.tsx\");\n/* harmony import */ var _components_PostCardSaveAction_PostCardSaveAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/PostCardSaveAction/PostCardSaveAction */ \"./src/components/PostCardSaveAction/PostCardSaveAction.tsx\");\n/* harmony import */ var _components_PostCardLikeAndComment_PostCardLikeAndComment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/PostCardLikeAndComment/PostCardLikeAndComment */ \"./src/components/PostCardLikeAndComment/PostCardLikeAndComment.tsx\");\n/* harmony import */ var _components_CategoryBadgeList_CategoryBadgeList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/CategoryBadgeList/CategoryBadgeList */ \"./src/components/CategoryBadgeList/CategoryBadgeList.tsx\");\n/* harmony import */ var _components_PostTypeFeaturedIcon_PostTypeFeaturedIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/PostTypeFeaturedIcon/PostTypeFeaturedIcon */ \"./src/components/PostTypeFeaturedIcon/PostTypeFeaturedIcon.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _utils_getPostDataFromPostFragment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/getPostDataFromPostFragment */ \"./src/utils/getPostDataFromPostFragment.ts\");\n/* harmony import */ var _MyImage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../MyImage */ \"./src/components/MyImage.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_PostCardSaveAction_PostCardSaveAction__WEBPACK_IMPORTED_MODULE_3__, _components_PostCardLikeAndComment_PostCardLikeAndComment__WEBPACK_IMPORTED_MODULE_4__]);\n([_components_PostCardSaveAction_PostCardSaveAction__WEBPACK_IMPORTED_MODULE_3__, _components_PostCardLikeAndComment_PostCardLikeAndComment__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\nconst Card6 = ({ className = \"h-full\", post })=>{\n    const { title, link, date, categories, excerpt, author, postFormats, featuredImage, ncPostMetaData, commentCount, uri, databaseId } = (0,_utils_getPostDataFromPostFragment__WEBPACK_IMPORTED_MODULE_8__.getPostDataFromPostFragment)(post);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: `nc-Card6 relative flex group flex-row items-center sm:p-4 sm:rounded-3xl sm:bg-white sm:dark:bg-neutral-900 sm:border border-neutral-200 dark:border-neutral-700 ${className}`,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                href: uri || \"\",\n                className: \"absolute inset-0 z-0\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Singh\\\\Downloads\\\\ncmaz-nextjs-headless-\\\\NCMAZ_FAUST\\\\front-end\\\\ncmaz-faust\\\\src\\\\components\\\\Card6\\\\Card6.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col flex-grow\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-3 mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CategoryBadgeList_CategoryBadgeList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                categories: categories?.nodes || []\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Singh\\\\Downloads\\\\ncmaz-nextjs-headless-\\\\NCMAZ_FAUST\\\\front-end\\\\ncmaz-faust\\\\src\\\\components\\\\Card6\\\\Card6.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: `block font-semibold text-sm sm:text-base`,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                    dangerouslySetInnerHTML: {\n                                        __html: title\n                                    },\n                                    href: uri || \"\",\n                                    className: \"line-clamp-2\",\n                                    title: title || \"\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Singh\\\\Downloads\\\\ncmaz-nextjs-headless-\\\\NCMAZ_FAUST\\\\front-end\\\\ncmaz-faust\\\\src\\\\components\\\\Card6\\\\Card6.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Singh\\\\Downloads\\\\ncmaz-nextjs-headless-\\\\NCMAZ_FAUST\\\\front-end\\\\ncmaz-faust\\\\src\\\\components\\\\Card6\\\\Card6.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostCardMeta_PostCardMeta__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                meta: {\n                                    author,\n                                    date\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Singh\\\\Downloads\\\\ncmaz-nextjs-headless-\\\\NCMAZ_FAUST\\\\front-end\\\\ncmaz-faust\\\\src\\\\components\\\\Card6\\\\Card6.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Singh\\\\Downloads\\\\ncmaz-nextjs-headless-\\\\NCMAZ_FAUST\\\\front-end\\\\ncmaz-faust\\\\src\\\\components\\\\Card6\\\\Card6.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center flex-wrap justify-between mt-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostCardLikeAndComment_PostCardLikeAndComment__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                className: \"relative\",\n                                commentCount: commentCount || 0,\n                                linkToPost: uri || \"\",\n                                likeCount: ncPostMetaData?.likesCount || 0,\n                                postDatabseId: databaseId || 0\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Singh\\\\Downloads\\\\ncmaz-nextjs-headless-\\\\NCMAZ_FAUST\\\\front-end\\\\ncmaz-faust\\\\src\\\\components\\\\Card6\\\\Card6.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostCardSaveAction_PostCardSaveAction__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                className: \"relative\",\n                                readingTime: ncPostMetaData?.readingTime || 1,\n                                postDatabseId: databaseId || 0\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Singh\\\\Downloads\\\\ncmaz-nextjs-headless-\\\\NCMAZ_FAUST\\\\front-end\\\\ncmaz-faust\\\\src\\\\components\\\\Card6\\\\Card6.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Singh\\\\Downloads\\\\ncmaz-nextjs-headless-\\\\NCMAZ_FAUST\\\\front-end\\\\ncmaz-faust\\\\src\\\\components\\\\Card6\\\\Card6.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Singh\\\\Downloads\\\\ncmaz-nextjs-headless-\\\\NCMAZ_FAUST\\\\front-end\\\\ncmaz-faust\\\\src\\\\components\\\\Card6\\\\Card6.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                href: uri || \"\",\n                className: `block relative flex-shrink-0 w-24 h-24 sm:w-40 sm:h-full ms-3 sm:ms-5 rounded-2xl overflow-hidden z-0`,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MyImage__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        sizes: \"(max-width: 600px) 180px, 400px\",\n                        className: \"object-cover w-full h-full\",\n                        fill: true,\n                        src: featuredImage?.sourceUrl || \"\",\n                        alt: title || \"Card Image\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Singh\\\\Downloads\\\\ncmaz-nextjs-headless-\\\\NCMAZ_FAUST\\\\front-end\\\\ncmaz-faust\\\\src\\\\components\\\\Card6\\\\Card6.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"absolute bottom-1 start-1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostTypeFeaturedIcon_PostTypeFeaturedIcon__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            wrapSize: \"h-7 w-7\",\n                            iconSize: \"h-4 w-4\",\n                            postType: postFormats || \"\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Singh\\\\Downloads\\\\ncmaz-nextjs-headless-\\\\NCMAZ_FAUST\\\\front-end\\\\ncmaz-faust\\\\src\\\\components\\\\Card6\\\\Card6.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Singh\\\\Downloads\\\\ncmaz-nextjs-headless-\\\\NCMAZ_FAUST\\\\front-end\\\\ncmaz-faust\\\\src\\\\components\\\\Card6\\\\Card6.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Singh\\\\Downloads\\\\ncmaz-nextjs-headless-\\\\NCMAZ_FAUST\\\\front-end\\\\ncmaz-faust\\\\src\\\\components\\\\Card6\\\\Card6.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Singh\\\\Downloads\\\\ncmaz-nextjs-headless-\\\\NCMAZ_FAUST\\\\front-end\\\\ncmaz-faust\\\\src\\\\components\\\\Card6\\\\Card6.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card6);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJkNi9DYXJkNi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ2dDO0FBQ2tCO0FBQ1k7QUFDZjtBQUNTO0FBQzdEO0FBQ3FEO0FBQ2pEO0FBS2pDLE1BQU1TLFFBQXdCLENBQUMsRUFBRUMsWUFBWSxRQUFRLEVBQUVDLElBQUksRUFBRTtJQUMzRCxNQUFNLEVBQ0pDLEtBQUssRUFDTEMsSUFBSSxFQUNKQyxJQUFJLEVBQ0pDLFVBQVUsRUFDVkMsT0FBTyxFQUNQQyxNQUFNLEVBQ05DLFdBQVcsRUFDWEMsYUFBYSxFQUNiQyxjQUFjLEVBQ2RDLFlBQVksRUFDWkMsR0FBRyxFQUNIQyxVQUFVLEVBQ1gsR0FBR2hCLCtGQUEyQkEsQ0FBQ0k7SUFFaEMscUJBQ0UsOERBQUNhO1FBQ0NkLFdBQVcsQ0FBQyxpS0FBaUssRUFBRUEsVUFBVSxDQUFDOzswQkFFMUwsOERBQUNKLGtEQUFJQTtnQkFBQ21CLE1BQU1ILE9BQU87Z0JBQUlaLFdBQVU7Ozs7OzswQkFDakMsOERBQUNjO2dCQUFJZCxXQUFVOztrQ0FDYiw4REFBQ2M7d0JBQUlkLFdBQVU7OzBDQUNiLDhEQUFDTix1RkFBaUJBO2dDQUFDVyxZQUFZQSxZQUFZVyxTQUFTLEVBQUU7Ozs7OzswQ0FDdEQsOERBQUNDO2dDQUFHakIsV0FBVyxDQUFDLHdDQUF3QyxDQUFDOzBDQUN2RCw0RUFBQ0osa0RBQUlBO29DQUNIc0IseUJBQXlCO3dDQUFFQyxRQUFRakI7b0NBQU07b0NBQ3pDYSxNQUFNSCxPQUFPO29DQUNiWixXQUFVO29DQUNWRSxPQUFPQSxTQUFTOzs7Ozs7Ozs7OzswQ0FHcEIsOERBQUNYLDZFQUFZQTtnQ0FBQzZCLE1BQU07b0NBQUViO29DQUFRSDtnQ0FBSzs7Ozs7Ozs7Ozs7O2tDQUVyQyw4REFBQ1U7d0JBQUlkLFdBQVU7OzBDQUNiLDhEQUFDUCxpR0FBc0JBO2dDQUNyQk8sV0FBVTtnQ0FDVlcsY0FBY0EsZ0JBQWdCO2dDQUM5QlUsWUFBWVQsT0FBTztnQ0FDbkJVLFdBQVdaLGdCQUFnQmEsY0FBYztnQ0FDekNDLGVBQWVYLGNBQWM7Ozs7OzswQ0FFL0IsOERBQUNyQix5RkFBa0JBO2dDQUNqQlEsV0FBVTtnQ0FDVnlCLGFBQWFmLGdCQUFnQmUsZUFBZTtnQ0FDNUNELGVBQWVYLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLbkMsOERBQUNqQixrREFBSUE7Z0JBQ0htQixNQUFNSCxPQUFPO2dCQUNiWixXQUFXLENBQUMscUdBQXFHLENBQUM7O2tDQUVsSCw4REFBQ0YsZ0RBQU9BO3dCQUNONEIsT0FBTTt3QkFDTjFCLFdBQVU7d0JBQ1YyQixJQUFJO3dCQUNKQyxLQUFLbkIsZUFBZW9CLGFBQWE7d0JBQ2pDQyxLQUFLNUIsU0FBUzs7Ozs7O2tDQUVoQiw4REFBQzZCO3dCQUFLL0IsV0FBVTtrQ0FDZCw0RUFBQ0wsNkZBQW9CQTs0QkFDbkJxQyxVQUFTOzRCQUNUQyxVQUFTOzRCQUNUQyxVQUFVMUIsZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNckM7QUFFQSxpRUFBZVQsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhcmQ2L0NhcmQ2LnRzeD8wYjQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBvc3RDYXJkTWV0YSBmcm9tIFwiQC9jb21wb25lbnRzL1Bvc3RDYXJkTWV0YS9Qb3N0Q2FyZE1ldGFcIjtcbmltcG9ydCBQb3N0Q2FyZFNhdmVBY3Rpb24gZnJvbSBcIkAvY29tcG9uZW50cy9Qb3N0Q2FyZFNhdmVBY3Rpb24vUG9zdENhcmRTYXZlQWN0aW9uXCI7XG5pbXBvcnQgUG9zdENhcmRMaWtlQW5kQ29tbWVudCBmcm9tIFwiQC9jb21wb25lbnRzL1Bvc3RDYXJkTGlrZUFuZENvbW1lbnQvUG9zdENhcmRMaWtlQW5kQ29tbWVudFwiO1xuaW1wb3J0IENhdGVnb3J5QmFkZ2VMaXN0IGZyb20gXCJAL2NvbXBvbmVudHMvQ2F0ZWdvcnlCYWRnZUxpc3QvQ2F0ZWdvcnlCYWRnZUxpc3RcIjtcbmltcG9ydCBQb3N0VHlwZUZlYXR1cmVkSWNvbiBmcm9tIFwiQC9jb21wb25lbnRzL1Bvc3RUeXBlRmVhdHVyZWRJY29uL1Bvc3RUeXBlRmVhdHVyZWRJY29uXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBnZXRQb3N0RGF0YUZyb21Qb3N0RnJhZ21lbnQgfSBmcm9tIFwiQC91dGlscy9nZXRQb3N0RGF0YUZyb21Qb3N0RnJhZ21lbnRcIjtcbmltcG9ydCBNeUltYWdlIGZyb20gXCIuLi9NeUltYWdlXCI7XG5pbXBvcnQgeyBDb21tb25Qb3N0Q2FyZFByb3BzIH0gZnJvbSBcIi4uL0NhcmQyL0NhcmQyXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FyZDZQcm9wcyBleHRlbmRzIENvbW1vblBvc3RDYXJkUHJvcHMge31cblxuY29uc3QgQ2FyZDY6IEZDPENhcmQ2UHJvcHM+ID0gKHsgY2xhc3NOYW1lID0gXCJoLWZ1bGxcIiwgcG9zdCB9KSA9PiB7XG4gIGNvbnN0IHtcbiAgICB0aXRsZSxcbiAgICBsaW5rLFxuICAgIGRhdGUsXG4gICAgY2F0ZWdvcmllcyxcbiAgICBleGNlcnB0LFxuICAgIGF1dGhvcixcbiAgICBwb3N0Rm9ybWF0cyxcbiAgICBmZWF0dXJlZEltYWdlLFxuICAgIG5jUG9zdE1ldGFEYXRhLFxuICAgIGNvbW1lbnRDb3VudCxcbiAgICB1cmksXG4gICAgZGF0YWJhc2VJZCxcbiAgfSA9IGdldFBvc3REYXRhRnJvbVBvc3RGcmFnbWVudChwb3N0KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YG5jLUNhcmQ2IHJlbGF0aXZlIGZsZXggZ3JvdXAgZmxleC1yb3cgaXRlbXMtY2VudGVyIHNtOnAtNCBzbTpyb3VuZGVkLTN4bCBzbTpiZy13aGl0ZSBzbTpkYXJrOmJnLW5ldXRyYWwtOTAwIHNtOmJvcmRlciBib3JkZXItbmV1dHJhbC0yMDAgZGFyazpib3JkZXItbmV1dHJhbC03MDAgJHtjbGFzc05hbWV9YH1cbiAgICA+XG4gICAgICA8TGluayBocmVmPXt1cmkgfHwgXCJcIn0gY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCB6LTBcIj48L0xpbms+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZmxleC1ncm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zIG1iLTRcIj5cbiAgICAgICAgICA8Q2F0ZWdvcnlCYWRnZUxpc3QgY2F0ZWdvcmllcz17Y2F0ZWdvcmllcz8ubm9kZXMgfHwgW119IC8+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17YGJsb2NrIGZvbnQtc2VtaWJvbGQgdGV4dC1zbSBzbTp0ZXh0LWJhc2VgfT5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdGl0bGUgfX1cbiAgICAgICAgICAgICAgaHJlZj17dXJpIHx8IFwiXCJ9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpbmUtY2xhbXAtMlwiXG4gICAgICAgICAgICAgIHRpdGxlPXt0aXRsZSB8fCBcIlwifVxuICAgICAgICAgICAgPjwvTGluaz5cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxQb3N0Q2FyZE1ldGEgbWV0YT17eyBhdXRob3IsIGRhdGUgfX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZmxleC13cmFwIGp1c3RpZnktYmV0d2VlbiBtdC1hdXRvXCI+XG4gICAgICAgICAgPFBvc3RDYXJkTGlrZUFuZENvbW1lbnRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlXCJcbiAgICAgICAgICAgIGNvbW1lbnRDb3VudD17Y29tbWVudENvdW50IHx8IDB9XG4gICAgICAgICAgICBsaW5rVG9Qb3N0PXt1cmkgfHwgXCJcIn1cbiAgICAgICAgICAgIGxpa2VDb3VudD17bmNQb3N0TWV0YURhdGE/Lmxpa2VzQ291bnQgfHwgMH1cbiAgICAgICAgICAgIHBvc3REYXRhYnNlSWQ9e2RhdGFiYXNlSWQgfHwgMH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxQb3N0Q2FyZFNhdmVBY3Rpb25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlXCJcbiAgICAgICAgICAgIHJlYWRpbmdUaW1lPXtuY1Bvc3RNZXRhRGF0YT8ucmVhZGluZ1RpbWUgfHwgMX1cbiAgICAgICAgICAgIHBvc3REYXRhYnNlSWQ9e2RhdGFiYXNlSWQgfHwgMH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8TGlua1xuICAgICAgICBocmVmPXt1cmkgfHwgXCJcIn1cbiAgICAgICAgY2xhc3NOYW1lPXtgYmxvY2sgcmVsYXRpdmUgZmxleC1zaHJpbmstMCB3LTI0IGgtMjQgc206dy00MCBzbTpoLWZ1bGwgbXMtMyBzbTptcy01IHJvdW5kZWQtMnhsIG92ZXJmbG93LWhpZGRlbiB6LTBgfVxuICAgICAgPlxuICAgICAgICA8TXlJbWFnZVxuICAgICAgICAgIHNpemVzPVwiKG1heC13aWR0aDogNjAwcHgpIDE4MHB4LCA0MDBweFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIHctZnVsbCBoLWZ1bGxcIlxuICAgICAgICAgIGZpbGxcbiAgICAgICAgICBzcmM9e2ZlYXR1cmVkSW1hZ2U/LnNvdXJjZVVybCB8fCBcIlwifVxuICAgICAgICAgIGFsdD17dGl0bGUgfHwgXCJDYXJkIEltYWdlXCJ9XG4gICAgICAgIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0xIHN0YXJ0LTFcIj5cbiAgICAgICAgICA8UG9zdFR5cGVGZWF0dXJlZEljb25cbiAgICAgICAgICAgIHdyYXBTaXplPVwiaC03IHctN1wiXG4gICAgICAgICAgICBpY29uU2l6ZT1cImgtNCB3LTRcIlxuICAgICAgICAgICAgcG9zdFR5cGU9e3Bvc3RGb3JtYXRzIHx8IFwiXCJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDY7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQb3N0Q2FyZE1ldGEiLCJQb3N0Q2FyZFNhdmVBY3Rpb24iLCJQb3N0Q2FyZExpa2VBbmRDb21tZW50IiwiQ2F0ZWdvcnlCYWRnZUxpc3QiLCJQb3N0VHlwZUZlYXR1cmVkSWNvbiIsIkxpbmsiLCJnZXRQb3N0RGF0YUZyb21Qb3N0RnJhZ21lbnQiLCJNeUltYWdlIiwiQ2FyZDYiLCJjbGFzc05hbWUiLCJwb3N0IiwidGl0bGUiLCJsaW5rIiwiZGF0ZSIsImNhdGVnb3JpZXMiLCJleGNlcnB0IiwiYXV0aG9yIiwicG9zdEZvcm1hdHMiLCJmZWF0dXJlZEltYWdlIiwibmNQb3N0TWV0YURhdGEiLCJjb21tZW50Q291bnQiLCJ1cmkiLCJkYXRhYmFzZUlkIiwiZGl2IiwiaHJlZiIsIm5vZGVzIiwiaDIiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIm1ldGEiLCJsaW5rVG9Qb3N0IiwibGlrZUNvdW50IiwibGlrZXNDb3VudCIsInBvc3REYXRhYnNlSWQiLCJyZWFkaW5nVGltZSIsInNpemVzIiwiZmlsbCIsInNyYyIsInNvdXJjZVVybCIsImFsdCIsInNwYW4iLCJ3cmFwU2l6ZSIsImljb25TaXplIiwicG9zdFR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Card6/Card6.tsx\n");

/***/ }),

/***/ "./src/components/Sections/SectionMagazine1.tsx":
/*!******************************************************!*\
  !*** ./src/components/Sections/SectionMagazine1.tsx ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Card2_Card2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Card2/Card2 */ \"./src/components/Card2/Card2.tsx\");\n/* harmony import */ var _components_Card6_Card6__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Card6/Card6 */ \"./src/components/Card6/Card6.tsx\");\n/* harmony import */ var _Empty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Empty */ \"./src/components/Empty.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Card2_Card2__WEBPACK_IMPORTED_MODULE_2__, _components_Card6_Card6__WEBPACK_IMPORTED_MODULE_3__]);\n([_components_Card2_Card2__WEBPACK_IMPORTED_MODULE_2__, _components_Card6_Card6__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst Components = ({ posts, className = \"\" })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: `nc-SectionMagazine1 ${className}`,\n        children: !posts.length ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Empty__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Singh\\\\Downloads\\\\ncmaz-nextjs-headless-\\\\NCMAZ_FAUST\\\\front-end\\\\ncmaz-faust\\\\src\\\\components\\\\Sections\\\\SectionMagazine1.tsx\",\n            lineNumber: 15,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-1 lg:grid-cols-2 gap-6 2xl:gap-7\",\n            children: [\n                posts[0] && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card2_Card2__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    size: \"large\",\n                    post: posts[0]\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Singh\\\\Downloads\\\\ncmaz-nextjs-headless-\\\\NCMAZ_FAUST\\\\front-end\\\\ncmaz-faust\\\\src\\\\components\\\\Sections\\\\SectionMagazine1.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 24\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid gap-6 2xl:gap-7\",\n                    children: posts.filter((_, i)=>i < 4 && i > 0).map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card6_Card6__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            post: item\n                        }, item.databaseId, false, {\n                            fileName: \"C:\\\\Users\\\\Singh\\\\Downloads\\\\ncmaz-nextjs-headless-\\\\NCMAZ_FAUST\\\\front-end\\\\ncmaz-faust\\\\src\\\\components\\\\Sections\\\\SectionMagazine1.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 17\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Singh\\\\Downloads\\\\ncmaz-nextjs-headless-\\\\NCMAZ_FAUST\\\\front-end\\\\ncmaz-faust\\\\src\\\\components\\\\Sections\\\\SectionMagazine1.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 11\n                }, undefined),\n                posts.filter((_, i)=>i >= 4).map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card6_Card6__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        post: item\n                    }, item.databaseId, false, {\n                        fileName: \"C:\\\\Users\\\\Singh\\\\Downloads\\\\ncmaz-nextjs-headless-\\\\NCMAZ_FAUST\\\\front-end\\\\ncmaz-faust\\\\src\\\\components\\\\Sections\\\\SectionMagazine1.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 15\n                    }, undefined))\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Singh\\\\Downloads\\\\ncmaz-nextjs-headless-\\\\NCMAZ_FAUST\\\\front-end\\\\ncmaz-faust\\\\src\\\\components\\\\Sections\\\\SectionMagazine1.tsx\",\n            lineNumber: 17,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Singh\\\\Downloads\\\\ncmaz-nextjs-headless-\\\\NCMAZ_FAUST\\\\front-end\\\\ncmaz-faust\\\\src\\\\components\\\\Sections\\\\SectionMagazine1.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Components);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TZWN0aW9ucy9TZWN0aW9uTWFnYXppbmUxLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDMEI7QUFDZjtBQUNoQjtBQU83QixNQUFNSSxhQUF3QyxDQUFDLEVBQUVDLEtBQUssRUFBRUMsWUFBWSxFQUFFLEVBQUU7SUFDdEUscUJBQ0UsOERBQUNDO1FBQUlELFdBQVcsQ0FBQyxvQkFBb0IsRUFBRUEsVUFBVSxDQUFDO2tCQUMvQyxDQUFDRCxNQUFNRyxNQUFNLGlCQUNaLDhEQUFDTCw4Q0FBS0E7Ozs7c0NBRU4sOERBQUNJO1lBQUlELFdBQVU7O2dCQUNaRCxLQUFLLENBQUMsRUFBRSxrQkFBSSw4REFBQ0osK0RBQUtBO29CQUFDUSxNQUFLO29CQUFRQyxNQUFNTCxLQUFLLENBQUMsRUFBRTs7Ozs7OzhCQUMvQyw4REFBQ0U7b0JBQUlELFdBQVU7OEJBQ1pELE1BQ0VNLE1BQU0sQ0FBQyxDQUFDQyxHQUFHQyxJQUFNQSxJQUFJLEtBQUtBLElBQUksR0FDOUJDLEdBQUcsQ0FBQyxDQUFDQyxxQkFDSiw4REFBQ2IsK0RBQUtBOzRCQUF1QlEsTUFBTUs7MkJBQXZCQSxLQUFLQyxVQUFVOzs7Ozs7Ozs7O2dCQUdoQ1gsTUFDRU0sTUFBTSxDQUFDLENBQUNDLEdBQUdDLElBQU1BLEtBQUssR0FDdEJDLEdBQUcsQ0FBQyxDQUFDQyxxQkFDSiw4REFBQ2IsK0RBQUtBO3dCQUF1QlEsTUFBTUs7dUJBQXZCQSxLQUFLQyxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7O0FBTXpDO0FBRUEsaUVBQWVaLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9ucy9TZWN0aW9uTWFnYXppbmUxLnRzeD80NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENhcmQyLCB7IFRQb3N0Q2FyZCB9IGZyb20gXCJAL2NvbXBvbmVudHMvQ2FyZDIvQ2FyZDJcIjtcbmltcG9ydCBDYXJkNiBmcm9tIFwiQC9jb21wb25lbnRzL0NhcmQ2L0NhcmQ2XCI7XG5pbXBvcnQgRW1wdHkgZnJvbSBcIi4uL0VtcHR5XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdGlvbk1hZ2F6aW5lMVByb3BzIHtcbiAgcG9zdHM6IFRQb3N0Q2FyZFtdO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG59XG5cbmNvbnN0IENvbXBvbmVudHM6IEZDPFNlY3Rpb25NYWdhemluZTFQcm9wcz4gPSAoeyBwb3N0cywgY2xhc3NOYW1lID0gXCJcIiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BuYy1TZWN0aW9uTWFnYXppbmUxICR7Y2xhc3NOYW1lfWB9PlxuICAgICAgeyFwb3N0cy5sZW5ndGggPyAoXG4gICAgICAgIDxFbXB0eSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGxnOmdyaWQtY29scy0yIGdhcC02IDJ4bDpnYXAtN1wiPlxuICAgICAgICAgIHtwb3N0c1swXSAmJiA8Q2FyZDIgc2l6ZT1cImxhcmdlXCIgcG9zdD17cG9zdHNbMF19IC8+fVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNiAyeGw6Z2FwLTdcIj5cbiAgICAgICAgICAgIHtwb3N0c1xuICAgICAgICAgICAgICAuZmlsdGVyKChfLCBpKSA9PiBpIDwgNCAmJiBpID4gMClcbiAgICAgICAgICAgICAgLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxDYXJkNiBrZXk9e2l0ZW0uZGF0YWJhc2VJZH0gcG9zdD17aXRlbX0gLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3Bvc3RzXG4gICAgICAgICAgICAuZmlsdGVyKChfLCBpKSA9PiBpID49IDQpXG4gICAgICAgICAgICAubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgIDxDYXJkNiBrZXk9e2l0ZW0uZGF0YWJhc2VJZH0gcG9zdD17aXRlbX0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnRzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2FyZDIiLCJDYXJkNiIsIkVtcHR5IiwiQ29tcG9uZW50cyIsInBvc3RzIiwiY2xhc3NOYW1lIiwiZGl2IiwibGVuZ3RoIiwic2l6ZSIsInBvc3QiLCJmaWx0ZXIiLCJfIiwiaSIsIm1hcCIsIml0ZW0iLCJkYXRhYmFzZUlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Sections/SectionMagazine1.tsx\n");

/***/ })

};
;