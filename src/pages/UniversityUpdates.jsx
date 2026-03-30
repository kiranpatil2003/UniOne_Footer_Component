import React from "react";
import "./UniversityUpdates.css";

const updates = [
  {
    id: 1,
    badge: "exam",
    title: "End-Semester Exam Schedule Released",
    desc: "The final examination timetable for Spring 2026 is now available. Check your department portal for seat numbers.",
    date: "March 28, 2026",
  },
  {
    id: 2,
    badge: "event",
    title: "TechFest 2026 Registrations Open",
    desc: "Annual technical festival registrations are live. Participate in hackathons, paper presentations, and coding contests.",
    date: "March 25, 2026",
  },
  {
    id: 3,
    badge: "result",
    title: "Mid-Semester Results Declared",
    desc: "Results for the mid-semester examinations have been published. Log in to the student portal to view your marks.",
    date: "March 20, 2026",
  },
  {
    id: 4,
    badge: "general",
    title: "Library Hours Extended During Exams",
    desc: "The central library will remain open until 11 PM on weekdays and 9 PM on weekends during the exam period.",
    date: "March 18, 2026",
  },
  {
    id: 5,
    badge: "event",
    title: "Guest Lecture: AI in Education",
    desc: "A special guest lecture on the impact of AI in modern education will be held in the auditorium on April 5.",
    date: "March 15, 2026",
  },
  {
    id: 6,
    badge: "general",
    title: "Scholarship Applications Deadline Extended",
    desc: "The deadline to apply for merit-based scholarships has been extended to April 10, 2026.",
    date: "March 12, 2026",
  },
];

const badgeLabels = {
  exam: "Exam",
  event: "Event",
  result: "Result",
  general: "General",
};

function UniversityUpdates() {
  return (
    <div className="uni-updates-container">
      <h1 className="uni-updates-title">University Updates</h1>
      <p className="uni-updates-subtitle">
        Stay informed with the latest announcements, exam schedules, and campus
        events.
      </p>

      <div className="uni-updates-grid">
        {updates.map((item) => (
          <div className="update-card" key={item.id}>
            <span className={`update-card-badge badge-${item.badge}`}>
              {badgeLabels[item.badge]}
            </span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <span className="update-card-date">{item.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UniversityUpdates;
