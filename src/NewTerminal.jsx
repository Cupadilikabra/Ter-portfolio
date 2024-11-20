
import './Terminal.css'
import React, {useState,useRef,useEffect} from "react"
import Commands from "./components/Commands";
import WelcomeMsg from './components/WelcomeMsg';
import Abme from './components/Abme';
function NewTerminal(){

    const [input, setInput] = useState('');
    const [commands, setCommands] = useState([]); // Store all executed commands and outputs
    const [isTerminalOpen, setIsTerminalOpen] = useState(true);
    const inputRef = useRef();
    const terminalRef = useRef(null)

    
  
    useEffect(() => {
      // Autofocus input on mount and on every click outside
      if (inputRef.current) inputRef.current.focus();
      
  
      const handleClick = (e) => {
        if (inputRef.current && !inputRef.current.contains(e.target)) {
          inputRef.current.focus();
        }
      };
  
      document.addEventListener('click', handleClick);
      return () => {
        document.removeEventListener('click', handleClick);
      };
    }, []);
    
    useEffect(() => {
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight; // Scroll to bottom
      }
    }, [commands]);
    

    
  
    const handleKey = (e) => {
      if (e.key === 'Enter') {
        processCommand(input.trim());
        setInput('');
      }
    };
  
    const processCommand = (command) => {
      // Dynamic logic for handling commands
      let output;
      let sectionComponent = null;
  
      switch (command) {
        case 'help':
          output = 'Available commands: help, abme, skills, contact, clear, exit';
          sectionComponent = <Commands/>
          break;
  
        case 'about':
          output = 'This section is about me.';
          sectionComponent = <Abme />;
          break;
  
        case 'skills':
          output = 'This is the Skills section.';
          sectionComponent = <Skills1 />;
          break;
  
        case 'contact':
          output = 'This is the Contact section.';
          sectionComponent = <Contact />;
          break;
  
        case 'clear':
          setCommands([]);
          return;
  
        case 'exit':
          setIsTerminalOpen(false);
          return;
  
        default:
          output = 'Unknown command. Type "help" for available commands.';
      }
  
      // Append the new command and output
      setCommands((prevCommands) => [
        ...prevCommands,
        { command, output, section: sectionComponent },
      ]);
    };
  
    if (!isTerminalOpen) return <div>Terminal Closed</div>;
    return (
        <div ref={terminalRef} className="terminal">
          <h1>******* Portfolio Terminal</h1>
          <p className='terminal-msg'>{<WelcomeMsg/>} </p>
          <div className='terminal-otp'>
            {commands.map((cmd, index) => (
              <div key={index}>
                <p>$ {cmd.command}</p>
                <p className='output'>{cmd.output}</p>
                {cmd.section && <div>{cmd.section}</div>}
              </div>
            ))}
          </div>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            onKeyDown={handleKey}
          />
        </div>
      );
    }

const AboutMe = () => <div>About Me Content Here</div>;
const Skills = () => <div>Skills Content Here</div>;
const Contact = () => <div>Contact Content Here</div>;

export default NewTerminal