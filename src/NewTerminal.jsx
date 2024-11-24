import React, { useState, useRef, useEffect } from "react";
import { useCaret } from "./hooks/useCaret";
import './components/css/CustomInput.css';
import './Terminal.css';

import Commands from "./components/Commands";
import WelcomeMsg from './components/WelcomeMsg';
import Abme from './components/Abme';
import ContactMe from "./components/ContactMe";
import Documents from "./components/Documents"
import Time from"./components/Time"

function NewTerminal() {
  const [input, setInput] = useState('');
  const [commands, setCommands] = useState([]);
  const [isTerminalOpen, setIsTerminalOpen] = useState(true);

  const inputRef = useRef();
  const terminalRef = useRef(null);
  const bottomRef = useRef(null);

  const { caretPosition, updateCaretPosition } = useCaret(inputRef);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commands]);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [commands]);

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      processCommand(input.trim());
      setInput('');
    }
    requestAnimationFrame(updateCaretPosition);
  };
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const processCommand = (command) => {
    let output;
    let sectionComponent = null;

    switch (command) {
      case 'help':
        output = '';
        sectionComponent = <Commands />;
        break;

      case 'about':
        output = '';
        sectionComponent = <Abme />;
        break;

      case 'skills':
        output = 'This is the Skills section.';
        sectionComponent = <Skills />;
        break;

      case 'contact':
        output = '';
        sectionComponent = <ContactMe />;
        break;

        case 'time':
          output = '';
          sectionComponent = <Time command={command} />;
        
          break;

        case 'documents':
        output = '';
        sectionComponent = <Documents />;
        break;

      case 'clear':
        setCommands([]);
        return;

      case 'exit':
        setIsTerminalOpen(false);
        return;

      default:
        output = <span style={{ color: '#8B0000' }}>Unknown command. Type <span style={{ color: '#d29512' }}>"help" </span> for available commands.</span>;
      
    }

    setCommands((prevCommands) => [
      ...prevCommands,
      { command, output, section: sectionComponent },
    ]);
  };

  if (!isTerminalOpen) return <div className="cmd-exit">Terminal Closed</div>;

  return (<>
    <div ref={terminalRef} className="terminal" onClick={() => inputRef.current && inputRef.current.focus()}>
      <h1>******* Portfolio Terminal</h1>
      <p className="wmsg"><WelcomeMsg /></p>
      <div className="ta">
        {commands.map((cmd, index) => (
          <div ref={bottomRef} key={index}>
            <p className="cmd-command"> <span className="cmd-color">$Guest@EndijsPortfolio_: </span> {cmd.command }</p>
            <p className='output'>{cmd.output}</p>
            {cmd.section && <div className="cmd-output">{cmd.section}</div>}
          </div>
        ))}
      </div>
      <divc
        className='input-container'
        style={{ "--caret-position": caretPosition }}
      >
        <input
          className='input'
          ref={inputRef}
          value={input}
          onInput={updateCaretPosition}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          onKeyDown={handleKey}
        />
        <div
          className="custom-caret"
          style={{ left: `${caretPosition}px` }}
        ></div>
      </divc>
    </div>
  </>);
}

const Skills = () => <div>Skills Content Here</div>;
const Contact = () => <div>Contact Content Here</div>;

export default NewTerminal;
