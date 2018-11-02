(()=> {

const topEl = document.querySelector('#beer1');

function runAnimation (parent, elements){
    //debugger;
    console.log(parent, elements);

    //get the svg ref from the parent -> parent is the object tag, contentDocument is the svg itself
    innerSVG = parent.contentDocument;

    //run an animation with Greensock
    elements.forEach(el => {
        let target = innerSVG.querySelector(`#${el}`);
        TweenMax.to (target, 0.6, {scaleX: 1.5, scaleY: 1.5, rotation: 360, transformOrigin: "50% 50%"});
    })
}


//event handling
topEl.addEventListener("mouseover", function(){
    runAnimation(this.querySelector('.svg-graphic'), ["lStar", "rStar"]);
});


})();