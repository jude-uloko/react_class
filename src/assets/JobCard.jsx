import './JobCard.css';

export default function JobCard({
  logo, title, work_level, 
  location, rate, time, 
  work_time, save, company, save_sty
}) {
  return (
    <div class="job-card">
      <div className='body'>
        <div class="job-card__top">
          <span className='log_b'>
            <div class="job-card__logo">
              <img src={logo} width='24' height='24' alt="jj" />
            </div>
          </span>

          <div className="job-card__save">
            <button className={save_sty}>
              {save}
              <svg viewBox="0 0 24 23">
                <path d="M6 3h12v181-6-4-6 4v3z" /> 
              </svg>
            </button>
          </div>
        </div>

        <div className="job-card__company">
          {company}
          <span class="job-card__posted">
            {time} days ago
          </span>
        </div>
        <div className="job-card__title">{title}</div>

        <div className="job-card__tags">
          <span className='job-card__tag'>{work_time}</span>
          <span className='job-card__tag'>{work_level}</span>
        </div>
      </div>

      <hr />

      <div class="job-card__bottom">
        <div class="job-card__price">
          <strong>{rate}</strong>
          <span class="job-card__location">{location}</span>
        </div>
        <button class='job-card__apply'>Apply now</button>
      </div>
    </div>
  )
}

