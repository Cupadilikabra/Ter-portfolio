import './Terminal.css'
import { useState,useRef, useEffect } from 'react'
import AboutMe from './AboutMe'
import Commands from './commands/Commands';

function Terminal(){

const [input, setInput] = useState('');
const [output, setOutput] = useState('');
const [section, setSection] = useState('');
const [commandCount, setCommandCount] = useState(0);
const [isTerminalOpen, setIsTerminalOpen] = useState(true);
const inputRef = useRef();

useEffect(()=>{

    if (inputRef.current) {
        inputRef.current.focus();
      }

    const handleClick = (e)=>{
         if(inputRef.current&&!inputRef.current.contains(e.Target)){
        inputRef.current.focus();
    };
};
    document.addEventListener('click',handleClick);
    return ()=>{document.removeEventListener('click',handleClick)
    };
   
},[]);


const handleKey = (e)=>{
    if(e.key === 'Enter'){
        setCommandCount((prevCount)=> prevCount +1);
        setOutput( prevOutput => prevOutput +'\n' + 'guest@EndijsPortfolio=>$ ' + input + '\n' ) 
        setInput('')
        switch (input) {
            case 'help':
                setOutput(prevOutput => prevOutput + 'This section is help \n'+commandCount );
                break;
        
            case 'abme':
                setOutput(prevOutput => prevOutput + 'This section is about me \n' );
                // setSection(<AboutMe/>) 
                break;

             case 'skills':
                //setOutput(prevOutput => prevOutput + 'This is my Skills.\n');
                ;
            break;

            case 'contact':
                //setOutput(prevOutput => prevOutput + 'This is Contact.\n');
                //setOutput(Commandsw)
            break;


        
            case 'clear':
                setOutput('')
                setSection('')
             break;

            case 'exit':
                setIsTerminalOpen(false);
            break;
        
            // Optional: Add more cases as needed
        
            default:
                setOutput(prevOutput => prevOutput +'Unknow Command. Type help for Commands')
                break;
        }
      
    }

}
if (!isTerminalOpen) return null;

    return(
        <div className='terminal'>
            <h1>Endijs Portfolio Terminal</h1>
            <p>{welcomeMessage}</p>
            <div className='terminal'>
           <p className='output'>{output}</p>   
            {/* {section === 'about' && <AboutMe key={commandCount}/>} */}
             {section === 'help' && <Commands key={commandCount}/>}
            </div>
            <input
            ref ={inputRef}
             value={input}
             onChange={event=>setInput(event.target.value)} 
             type="text"
             onKeyDown = {handleKey}

     
             />
          
        </div>
    )
    
}

//MESSAGE TEXTS
// 
//
//
//
//

const welcomeMessage = [
   `Welcome to [Endijs Lacis]'s Portfolio Terminal!
---------------------------------------------------
  Your one-stop digital space to explore my work, skills, and projects.

Commands you can try:
  - 'about': Learn more about me and my background.
  - 'projects': View a list of my latest projects.
  - 'skills': Check out the technical skills I bring to the table.
  - 'contact': Get in touch with me through email and social media.

Type 'help' to see a list of available commands, or type any of the above to start exploring!

Happy browsing!

Type 'exit' to leave the terminal session.
---------------------------------------------------
> _`
  ];

  const availableCommands =[
` - 'about': Learn more about me and my background.
  - 'projects': View a list of my latest projects.
  - 'skills': Check out the technical skills I bring to the table.
  - 'contact': Get in touch with me through email and social media.
  - 'clear': Clear the Terminal
  - 'exit': Exit the Terminal`
  ]

  const Commandsw = <AboutMe/>;


export default Terminal 

