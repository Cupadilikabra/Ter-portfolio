

function Commands(){
    const availableCommands = [
        <p><span className="command-name">'about'</span>: Learn more about me and my background.</p>,
        <p><span className="command-name">'projects'</span>: View a list of my latest projects.</p>,
        <p><span className="command-name">'skills'</span>: Check out the technical skills I bring to the table.</p>,
        <p><span className="command-name">'contact'</span>: Get in touch with me through email and social media.</p>,
        <p><span className="command-name">'clear'</span>: Clear the Terminal.</p>,
        <p><span className="command-name">'exit'</span>: Exit the Terminal.</p>,
       
      ];
      
      const CommandList = () => (
        <div>
          {availableCommands}
        </div>
      );

      return(
       <CommandList/>
      )
}

export default Commands