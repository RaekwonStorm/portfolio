'use strict';
import React from 'react';

export default ({language}) => (
  <div>
    {language === 'English' ? (
        <div className="child-content">
            <h3>
            Hi I'm Reed. I was once a spy, but now I code. Yeah, they can totally see you through your webcam.
            So uhh... put on some pants, creep.
            </h3>
            <h3>
            I'm also fluent in Chinese ("Ohhh, so that's why he has that big thing in the top right corner!"),
            and make great guac.
            </h3>
            <h3>
            I felt like playing around with react and redux, so that's what I used on the front end of this site.
            I built the backend with node/express, but I also wanted to play around with Python/Flask, so I built
            another backend with that.
            </h3>

        </div>
            ) : null
    }
  </div>
)

// (<h3>你好，我是瑞德。我以前是個間諜，但現在作為一個軟件工程師。對的，我們政府真的可以有你的攝像頭見到你。所以我建議你穿上一雙褲子。

//             我也會講一口流利的國語 ("原來如此。這解釋著那個在右邊放的東西!")，我也會做一碗非常好吃的guacamole(鰐梨)。

//             我基本上要玩一下react和redux，所以我在前端用了它們。在後端我用了node和express，但我也要試一下用python和flask，所以我也用了它們寫另外一個後端。</h3>)
