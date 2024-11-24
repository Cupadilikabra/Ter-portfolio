

function WelcomeMsg(){

    return(
            <div className="terminal">
              <div className="terminal-header">
                Welcome to [Endijs Lacis]'s Portfolio Terminal!
              </div>
              <div className="h-line">---------------------------------------------------</div>
              <div className="terminal-subheading">
                Your one-stop digital space to explore my work, skills, and projects.
              </div>
              
              <div className="commands-box">
                <div className="h-line">
                  +---------------------------+
                </div>
                <div className="commands-list">
                  <div className="command">
                    <span className="command-name">'about'</span>: Learn more about me and my background.
                  </div>
                  <div className="command">
                    <span className="command-name">'projects'</span>: View a list of my latest projects.
                  </div>
                  <div className="command">
                    <span className="command-name">'skills'</span>: Check out the technical skills I bring to the table.
                  </div>
                  <div className="command">
                    <span className="command-name">'contact'</span>: Get in touch with me through email and social media.
                  </div>
                </div>
                <div className="h-line">
                  +---------------------------+
                </div>
              </div>
        
              <div className="terminal-footer">
                Type <span className="help-orange">'help'</span> to see a list of available commands, or type any of the above to start exploring!
              </div>
              <div className="terminal-footer">
                Happy browsing! Type<span className="help-orange"> 'exit'</span> to leave the terminal session.
              </div>
              <div className="h-line">---------------------------------------------------</div>
              <div className="terminal-input"></div>
            </div>
          );
}

export default WelcomeMsg