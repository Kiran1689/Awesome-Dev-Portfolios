import React from 'react';
import './CardModal.css';

const CardModal = ({ card, onClose }) => {
  if (!card) {
    return null;
  }

  const { livePortfolioLink, githubRepoLink, name, technologiesUsed, username, email,linkedin  } = card;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{name}</h2>
        <table>
            <tbody>
              <tr>
                <td className="label">GitHub Username</td>
                <td>:</td>
                <td>{username}</td>
              </tr>
              <tr>
                <td className="label">Technologies Used</td>
                <td>:</td>
                <td>{technologiesUsed}</td>
              </tr>
              <tr>
                <td className="label">Live Portfolio Link</td>
                <td>:</td>
                <td>
                  <a href={livePortfolioLink} target="_blank" rel="noopener noreferrer">
                    {livePortfolioLink}
                  </a>
                </td>
              </tr>
              <tr>
                <td className="label">GitHub Repo Link</td>
                <td>:</td>
                <td>
                  <a href={githubRepoLink} target="_blank" rel="noopener noreferrer">
                    {githubRepoLink}
                  </a>
                </td>
              </tr>
              <tr>
                <td className="label">Email</td>
                <td>:</td>
                <td>
                  <a href={email} target="_blank" rel="noopener noreferrer">
                    {email}
                  </a>
                </td>
              </tr>
              <tr>
                <td className="label">LinkedIn</td>
                <td>:</td>
                <td>
                  <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    {linkedin}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <button class="x-close" onClick={onClose}>
            <span class="X"></span>
            <span class="Y"></span>
            <div class="close">CLOSE</div>
          </button>
      </div>
    </div>
  );
};

export default CardModal;
