export const slideUp={
    initial:{
        y:"0"
    },
    exit:(i)=>({
        y:"-100vh",
        transition:{duration: 0.2, ease:[0.76,0,0.24,1],delay:0.1*i}
    })
}
