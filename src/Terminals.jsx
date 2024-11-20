import React, { useState, useRef, useEffect } from 'react';
import Skills1 from'./components/Skills1'
function Terminals() {
  const [input, setInput] = useState('');
  const [commands, setCommands] = useState([]); // Store all executed commands and outputs
  const [isTerminalOpen, setIsTerminalOpen] = useState(true);
  const inputRef = useRef();

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
        break;

      case 'abme':
        output = 'This section is about me.';
        sectionComponent = <AboutMe />;
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
    <div className="terminal" style={{ padding: '10px', background: '#000', color: '#0f0', fontFamily: 'monospace' }}>
      <h1>Endijs Portfolio Terminal</h1>
      <p>Welcome! Type "help" for available commands.</p>
      <div>
        {commands.map((cmd, index) => (
          <div key={index}>
            <p>$ {cmd.command}</p>
            <p>{cmd.output}</p>
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
        style={{
          width: '100%',
          background: '#000',
          color: '#0f0',
          border: 'none',
          outline: 'none',
          padding: '10px',
        }}
      />
    </div>
  );
}

// Example Components for Sections
const AboutMe = () => <div>About Me Content Here</div>;
const Skills = () => <div>Skills Content Here</div>;
const Contact = () => <div>Contact Content Here</div>;



export default Terminals;