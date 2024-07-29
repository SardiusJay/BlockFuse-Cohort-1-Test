import { React } from 'react'
  
export function Header() {
    return (
      <div>
        <nav className="nav">
          <div className="nav-left">
            <a className="brand" href="#">
                SPA Tasks
            </a>
          </div>
          <div className="nav-right">
            <div className="tabs">
              <a href="https://Blockfuse.com">Task Management App by King Sardius</a>
            </div>
          </div>
        </nav>
      </div>
    );
};