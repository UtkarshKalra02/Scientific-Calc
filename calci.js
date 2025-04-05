 var screen=document.querySelector('#screen');
    var btn=document.querySelectorAll('.btn');

    /*============ For getting the value of btn, Here we use for loop ============*/
    for(item of btn)
    {
        item.addEventListener('click',(e)=>{
            btntext=e.target.innerText;

            if(btntext =='×')
            {
                btntext= '*';
            }

            if(btntext=='÷')
            {
                btntext='/';
            }
            screen.value+=btntext;
        });
    }

    function sin()
    {
        screen.value=Math.sin(screen.value);
    }

    function cos()
    {
        screen.value=Math.cos(screen.value);
    }

    function tan()
    {
        screen.value=Math.tan(screen.value);
    }

    function pow()
    {
        screen.value=Math.pow(screen.value,2);
    }

    function sqrt()
    {
        screen.value=Math.sqrt(screen.value,2);
    }

    function log()
    {
        screen.value=Math.log(screen.value);
    }

    function pi()
    {
        screen.value= 3.14159265359;
    }

    function e()
    {
        screen.value=2.71828182846;
    }

    function fact()
    {
        var i, num, f;
        f=1
        num=screen.value;
        for(i=1; i<=num; i++)
        {
            f=f*i;
        }

        i=i-1;

        screen.value=f;
    }

    function backspc()
    {
        screen.value=screen.value.substr(0,screen.value.length-1);
    }

    document.addEventListener('keydown', function (event) {
        const key = event.key;
        const allowedKeys = '0123456789+-*/().%';
    
        if (allowedKeys.includes(key)) {
            screen.value += key;
        }
    
        // Handle special keys
        if (key === 'Enter') {
            event.preventDefault();
            screen.value = eval(screen.value);
        }
    
        if (key === 'Backspace') {
            backspc();
        }
    
        if (key === 'Escape') {
            screen.value = '';
        }
    
        // Optional: Map keyboard letters to functions
        switch (key) {
            case 's':
                sin();
                break;
            case 'c':
                cos();
                break;
            case 't':
                tan();
                break;
            case 'l':
                log();
                break;
            case 'p':
                pi();
                break;
            case 'e':
                e();
                break;
            case '!':
                fact();
                break;
            case '^':
                pow();
                break;
            case 'r':
                sqrt();
                break;
        }
    });
    
