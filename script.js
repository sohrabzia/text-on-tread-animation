  class TextOnTread {
            constructor(element, options = {}) {
                this.element = typeof element === 'string' ? document.querySelector(element) : element;
                this.settings = {
                    text: 'SAMPLE TEXT',
                    duration: 8000,
                    treadLength: 44.57,
                    treadFragments: 80,
                    frontColor: '#f0f4ff',
                    backColor: '#0f1419',
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '3em',
                    fontWeight: '900',
                    ...options
                };
                
                this.init();
            }
            
            init() {
                if (!this.element) return;
                
                this.element.classList.add('text-on-tread');
                this.element.innerHTML = '';
                this.createAnimation();
            }
            
            createAnimation() {
                const { duration, treadLength, treadFragments, text, frontColor, backColor, fontFamily, fontSize, fontWeight } = this.settings;
                const treadFragmentWidth = treadLength / treadFragments;
                
                // Create front layer
                const frontLayer = document.createElement('div');
                frontLayer.className = 'tot__layer';
                frontLayer.textContent = text;
                frontLayer.style.fontFamily = fontFamily;
                frontLayer.style.fontSize = fontSize;
                frontLayer.style.fontWeight = fontWeight;
                
                // Create back layer
                const backLayer = document.createElement('div');
                backLayer.className = 'tot__layer';
                backLayer.textContent = text;
                backLayer.setAttribute('aria-hidden', 'true');
                backLayer.style.fontFamily = fontFamily;
                backLayer.style.fontSize = fontSize;
                backLayer.style.fontWeight = fontWeight;
                
                // Create tread fragments for front layer
                for (let f = 0; f < treadFragments; f++) {
                    const percent = f / treadFragments;
                    const moveX = f * treadFragmentWidth;
                    const delay = -duration + (percent * duration);
                    
                    const frontTread = this.createTreadFragment({
                        text: text,
                        delay: delay,
                        duration: duration,
                        moveX: moveX,
                        width: treadFragmentWidth,
                        color: frontColor
                    });
                    
                    frontLayer.appendChild(frontTread);
                }
                
                // Create tread fragments for back layer
                for (let f = 0; f < treadFragments; f++) {
                    const percent = f / treadFragments;
                    const moveX = f * treadFragmentWidth;
                    const delay = -duration + ((percent - 0.5) * duration);
                    
                    const backTread = this.createTreadFragment({
                        text: text,
                        delay: delay,
                        duration: duration,
                        moveX: -moveX,
                        width: treadFragmentWidth,
                        color: backColor
                    });
                    
                    backLayer.appendChild(backTread);
                }
                
                // Add layers to container
                this.element.appendChild(frontLayer);
                this.element.appendChild(backLayer);
            }
            
            createTreadFragment({ text, delay, duration, moveX, width, color }) {
                const tread = document.createElement('div');
                tread.className = 'tot__tread';
                
                const window = document.createElement('div');
                window.className = 'tot__tread-window';
                window.setAttribute('aria-hidden', 'true');
                window.setAttribute('data-text', text);
                
                // Set styles
                tread.style.animationDuration = `${duration}ms`;
                tread.style.animationDelay = `${delay}ms`;
                tread.style.width = `calc(${width}rem + 1px)`;
                tread.style.color = color;
                
                window.style.transform = `translateX(${moveX}rem)`;
                
                tread.appendChild(window);
                return tread;
            }
            
            updateText(newText) {
                this.settings.text = newText;
                this.element.innerHTML = '';
                this.createAnimation();
            }
            
            updateSettings(newSettings) {
                this.settings = { ...this.settings, ...newSettings };
                this.element.innerHTML = '';
                this.createAnimation();
            }
            
            destroy() {
                this.element.innerHTML = '';
                this.element.classList.remove('text-on-tread');
            }
        }
        
        // Initialize animations with different settings
        const animation1 = new TextOnTread('#animation1', {
            text: 'SOHARAB ZIA',
            duration: 8000,
            frontColor: '#ffffff',
            backColor: '#1a1a2e',
            fontFamily: 'Arial, sans-serif'
        });
        
        const animation2 = new TextOnTread('#animation2', {
            text: 'SOHARAB ZIA FAST MODE',
            duration: 4000,
            frontColor: '#ff6b6b',
            backColor: '#4ecdc4',
            fontFamily: 'Georgia, serif',
            fontSize: '2.5em'
        });
        
        const animation3 = new TextOnTread('#animation3', {
            text: 'SOHARAB ZIA SLOW MOTION',
            duration: 12000,
            frontColor: '#6c5ce7',
            backColor: '#ffd93d',
            fontFamily: 'Monaco, monospace',
            fontSize: '2em',
            fontWeight: '700'
        });
        
        // Example of how to update text and settings dynamically
        setTimeout(() => {
            animation1.updateText('Soharab zia');
        }, 5000);
        
        setTimeout(() => {
            animation2.updateSettings({
                text: 'NEW SETTINGS',
                frontColor: '#ff0000',
                backColor: '#00ff00',
                duration: 6000
            });
        }, 10000);