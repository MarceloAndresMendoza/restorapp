import i18next from "i18next"
import { getAsset } from "../../assets/assetList"
import { useEffect } from "react"
import anime from 'animejs/lib/anime.es.js';

export const Description = () => {

    useEffect(() => {
        // Wrap every letter in a span
        var textWrapper = document.querySelector('.animejs-anim .animejs-wrap-letter');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({ loop: false })
            .add({
                targets: '.animejs-anim .letter',
                opacity: 1,
                translateY: ["1.1em", 0],
                translateZ: 0,
                duration: 750,
                delay: (el, i) => 200 + 40 * i
            });
    }, [])

    return (
        <>
            <div className="p-10 relative text-center">
                <div className="text-center align-middle overflow-hidden inline-block relative animejs-anim">
                    <img className="max-w-[200px] mb-4 m-auto" src={getAsset('descImg').image} alt={getAsset('descImg').alt} />
                    <h1 className="text-4xl font-black text-primary mb-8 inline-block animejs-anim animejs-wrap-letter">{i18next.t('home-main-title')}</h1>
                    <h3 className="text-xl font-normal text-gray">{i18next.t('home-main-subtitle')}</h3>
                </div>
            </div>
        </>
    )
}
