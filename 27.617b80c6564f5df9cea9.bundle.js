(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1079:function(module,exports,__webpack_require__){var content=__webpack_require__(1080);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(142)(content,options);content.locals&&(module.exports=content.locals)},1080:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(141)(!1)).push([module.i,'/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * "License"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n.superset-legacy-chart-histogram {\n  overflow: hidden;\n}\n',""])},1593:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var prop_types=__webpack_require__(0),prop_types_default=__webpack_require__.n(prop_types),react=__webpack_require__(1),react_default=__webpack_require__.n(react),Histogram=__webpack_require__(1576),BarSeries=__webpack_require__(1578),XAxis=__webpack_require__(1563),YAxis=__webpack_require__(1564),chartTheme=__webpack_require__(1581),vx_legend_es=__webpack_require__(1554),vx_scale_es=__webpack_require__(79),esm=__webpack_require__(58),vx_responsive_es=__webpack_require__(1081);function _extends(){return(_extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c])Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a}).apply(this,arguments)}var propTypes={className:prop_types_default.a.string,width:prop_types_default.a.oneOfType([prop_types_default.a.number,prop_types_default.a.string]),height:prop_types_default.a.oneOfType([prop_types_default.a.number,prop_types_default.a.string]),renderChart:prop_types_default.a.func.isRequired,renderLegend:prop_types_default.a.func.isRequired,position:prop_types_default.a.oneOf(["top","left","bottom","right"]),legendJustifyContent:prop_types_default.a.oneOf(["center","flex-start","flex-end"])},LEGEND_STYLE_BASE={display:"flex",flexGrow:0,flexShrink:0,order:-1,paddingTop:"5px",fontSize:"0.9em"},CHART_STYLE_BASE={flexGrow:1,flexShrink:1,flexBasis:"auto",position:"relative"},WithLegend=function(a){function b(){return a.apply(this,arguments)||this}!function _inheritsLoose(a,b){a.prototype=Object.create(b.prototype),a.prototype.constructor=a,a.__proto__=b}(b,a);var c=b.prototype;return c.getContainerDirection=function getContainerDirection(){switch(this.props.position){case"left":return"row";case"right":return"row-reverse";case"bottom":return"column-reverse";default:case"top":return"column"}},c.getLegendJustifyContent=function getLegendJustifyContent(){var a=this.props,b=a.legendJustifyContent,c=a.position;if(b)return b;switch(c){case"left":case"right":return"flex-start";case"bottom":return"flex-end";default:case"top":return"flex-end"}},c.render=function render(){var a=this.props,b=a.className,c=a.width,d=a.height,e=a.position,f=a.renderChart,g=a.renderLegend,h="left"===e||"right"===e,i={display:"flex",flexDirection:this.getContainerDirection()};c&&(i.width=c),d&&(i.height=d);var j=_extends({},CHART_STYLE_BASE);h?j.width=0:j.height=0;var k=h?"column":"row",l=_extends({},LEGEND_STYLE_BASE,{flexDirection:k,justifyContent:this.getLegendJustifyContent()});return react_default.a.createElement("div",{className:"with-legend "+b,style:i},react_default.a.createElement("div",{className:"legend-container",style:l},g({direction:k})),react_default.a.createElement("div",{className:"main-container",style:j},react_default.a.createElement(vx_responsive_es.a,null,function(a){return 0<a.width&&0<a.height?f(a):null})))},b}(react_default.a.Component);WithLegend.propTypes=propTypes,WithLegend.defaultProps={className:"",width:"auto",height:"auto",position:"top",legendJustifyContent:void 0};var esm_WithLegend=WithLegend;__webpack_require__(1079);var Histogram_propTypes={className:prop_types_default.a.string,data:prop_types_default.a.arrayOf(prop_types_default.a.shape({key:prop_types_default.a.string,values:prop_types_default.a.arrayOf(prop_types_default.a.number)})).isRequired,width:prop_types_default.a.number.isRequired,height:prop_types_default.a.number.isRequired,colorScheme:prop_types_default.a.string,normalized:prop_types_default.a.bool,binCount:prop_types_default.a.number,opacity:prop_types_default.a.number,xAxisLabel:prop_types_default.a.string,yAxisLabel:prop_types_default.a.string},CustomHistogram=function(a){function b(){return a.apply(this,arguments)||this}return function Histogram_inheritsLoose(a,b){a.prototype=Object.create(b.prototype),a.prototype.constructor=a,a.__proto__=b}(b,a),b.prototype.render=function render(){var a=this.props,b=a.className,c=a.data,d=a.width,e=a.height,f=a.binCount,g=a.colorScheme,h=a.normalized,i=a.opacity,j=a.xAxisLabel,k=a.yAxisLabel,l=esm.b.getScale(g),m=c.map(function(a){return a.key}),n=Object(vx_scale_es.c)({domain:m,range:m.map(l)});return react_default.a.createElement(esm_WithLegend,{className:"superset-legacy-chart-histogram "+b,width:d,height:e,position:"top",renderLegend:function renderLegend(a){var b=a.direction;return react_default.a.createElement(vx_legend_es.a,{scale:n,direction:b,shape:"rect",labelMargin:"0 15px 0 0"})},renderChart:function renderChart(a){return react_default.a.createElement(Histogram.a,{width:a.width,height:a.height,ariaLabel:"Histogram",normalized:h,binCount:f,binType:"numeric",margin:{top:20,right:20},renderTooltip:function renderTooltip(a){var b=a.datum,c=a.color;return react_default.a.createElement("div",null,react_default.a.createElement("strong",{style:{color:c}},b.bin0," to ",b.bin1),react_default.a.createElement("div",null,react_default.a.createElement("strong",null,"count "),b.count),react_default.a.createElement("div",null,react_default.a.createElement("strong",null,"cumulative "),b.cumulative))},valueAccessor:function valueAccessor(a){return a},theme:chartTheme.a},c.map(function(a){return react_default.a.createElement(BarSeries.a,{key:a.key,animated:!0,rawData:a.values,fill:n(a.key),fillOpacity:i})}),react_default.a.createElement(XAxis.a,{label:j}),react_default.a.createElement(YAxis.a,{label:k}))}})},b}(react_default.a.PureComponent);CustomHistogram.propTypes=Histogram_propTypes,CustomHistogram.defaultProps={className:"",colorScheme:"",normalized:!1,binCount:15,opacity:1,xAxisLabel:"",yAxisLabel:""};__webpack_exports__.default=CustomHistogram}}]);
//# sourceMappingURL=27.617b80c6564f5df9cea9.bundle.js.map