import React from 'react';

function Footer() {
  return (
    <footer className="bg-zinc-50 text-center text-surface/75 dark:bg-neutral-700 dark:text-white/75 lg:text-left">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p><strong>Email:</strong> <a href="mailto:suzet.sal@gmail.com" className="text-blue-600 hover:text-blue-800">suzet.sal@gmail.com</a></p>
          </div>
          <div>
            <p> <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/suzetsalinas" className="text-blue-600 hover:text-blue-800">Suzet's LinkedIn</a> </p>
          </div>
          <div>
            <p> <strong>Github:</strong> <a href="https://github.com/suzetsalinas" className="text-blue-600 hover:text-blue-800">Suzet's Github</a> </p>
          </div>
          <div>
            <p> <strong>Employer:</strong> <a href="" className="text-blue-600 hover:text-blue-800">ISSI</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;