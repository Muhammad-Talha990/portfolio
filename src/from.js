export const fromLeft={
    initial:{
        x:"-100%",
    },
    open:{
        x:"0%",
        transition:{duration:0.5,delay:0.2}
    },
    closed:{
        x:"-100%",
        transition:{duration:0.5}
    }
}
export const fromRight={
    initial:{
        x:"100%",
    },
    open:{
        x:"0%",
        transition:{duration:0.5,delay:0.2}
    },
    closed:{
        x:"100%",
        transition:{duration:0.5}
    }
}

export const fromUp={
    initial:{
        y:"-100%",
    },
    open:{
        y:"0%",
        transition:{duration:0.5,delay:0.2}
    },
    closed:{
        y:"-100%",
        transition:{duration:0.5}
    }
}

export const fromDown={
    initial:{
        y:"100%",
    },
    open:{
        y:"0%",
        transition:{duration:0.5,delay:0.2}
    },
    closed:{
        y:"100%",
        transition:{duration:0.5}
    }
}
