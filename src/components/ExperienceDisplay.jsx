import { format } from "date-fns"

export default function ExperienceDisplay({experience}) {
  return (
    <div className="experience-display">
      <div className="experience-split">
        <div className="experience-left">
          <div><b>{experience.company}</b></div>
          <div><i>{experience.position}</i></div>
        </div>
        <div className="experience-right">
          <div>
            {experience.startDate && format(experience.startDate, 'MMM yyyy')} - {experience.endDate && format(experience.endDate, 'MMM yyyy')}
          </div>
        </div>
      </div>
      <div>{experience.description}</div>
    </div>
  )
}