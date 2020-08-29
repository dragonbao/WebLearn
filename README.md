# WebLearn
源生JS获取CSS属性值:
                    ele = document.getElementByClassName("content")[0];
                    var marginLeft = ele.style.marginLeft; //只能获取写在标签内的CSS属性。
                    //获取CSS样式表内的CSS属性，可使用window.getComputedStyle<此处没有.号>(ele,伪类-没有可以不写)[attr]======不适用于IE<=8;
                    //或者低版本IE使用 ele.currentStyle（marginLeft）
