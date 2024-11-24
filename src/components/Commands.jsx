
function Commands (){

        const availableCommands = [
                { name: 'about', description: 'Learn more about me and my background.' },
                { name: 'projects', description: 'View a list of my latest projects.' },
                { name: 'skills', description: 'Check out the technical skills I bring to the table.' },
                { name: 'contact', description: 'Get in touch with me through email and social media.' },
                { name: 'documents', description: 'Displays certifications, resumes, and other relevant documents showcasing qualifications and achievements.' },
                { name: 'time', description: 'View current Time.' },
                { name: 'clear', description: 'Clear the Terminal.' },
                { name: 'exit', description: 'Exit the Terminal.' },
                
              ];
            
              return (
                <div>
                  <h1>Available Commands</h1>
                  <ul>
                    {availableCommands.map((command, index) => (
                      <li key={index}>
                        <span className="command-name">{command.name}</span>: {command.description}
                      </li>
                    ))}
                  </ul>
                </div>
              );
   

}

export default Commands