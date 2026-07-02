import { useState, useEffect, useRef } from "react";

// ─── Icons ───────────────────────────────────────────────────────────────────
const MusesIcon = ({ size = 32, color = "#E1C3FF" }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#muses-clip)">
      <path d="M30.7358 18.7749L34.5301 9.77829C35.7531 6.88074 37.8029 4.40789 40.4234 2.66877C43.0439 0.929645 46.1188 0.00138685 49.2638 0L45.4696 8.99657C44.2481 11.8952 42.1986 14.369 39.5778 16.1084C36.957 17.8477 33.8813 18.7753 30.7358 18.7749Z" fill={color}/>
      <path opacity="0.4" d="M30.7358 80L34.5301 71.0034C35.7531 68.1058 37.8029 65.633 40.4234 63.8939C43.0439 62.1547 46.1188 61.2265 49.2638 61.2251L45.4696 70.2217C44.2481 73.1203 42.1986 75.5941 39.5778 77.3335C36.957 79.0728 33.8813 80.0004 30.7358 80Z" fill={color}/>
      <path opacity="0.2" d="M61.2251 30.7361L70.2217 34.5304C73.1203 35.7519 75.5941 37.8013 77.3335 40.4221C79.0728 43.0429 80.0004 46.1186 80 49.2641L71.0034 45.4698C68.1058 44.2468 65.633 42.197 63.8939 39.5765C62.1547 36.9561 61.2265 33.8811 61.2251 30.7361Z" fill={color}/>
      <path opacity="0.7" d="M0 30.7361L8.99657 34.5304C11.8952 35.7519 14.369 37.8013 16.1084 40.4221C17.8477 43.0429 18.7753 46.1186 18.7749 49.2641L9.77829 45.4698C6.88074 44.2468 4.40789 42.197 2.66877 39.5765C0.929645 36.9561 0.00138685 33.8811 0 30.7361Z" fill={color}/>
      <path opacity="0.1" d="M48.457 18.4411L57.5016 14.7611C60.4155 13.5773 63.6136 13.2785 66.6963 13.9021C69.779 14.5258 72.6096 16.0441 74.8342 18.2674L65.7919 21.9428C62.8782 23.1277 59.6798 23.4274 56.5967 22.8046C53.5135 22.1818 50.6824 20.6641 48.457 18.4411Z" fill={color}/>
      <path opacity="0.5" d="M5.16553 61.7326L14.2078 58.0571C17.1215 56.8723 20.3199 56.5725 23.403 57.1953C26.4862 57.8181 29.3173 59.3359 31.5427 61.5589L22.4981 65.2389C19.5842 66.4227 16.3861 66.7214 13.3034 66.0978C10.2207 65.4742 7.39015 63.9559 5.16553 61.7326Z" fill={color}/>
      <path opacity="0.3" d="M61.5587 48.4572L65.2387 57.5017C66.4225 60.4156 66.7213 63.6137 66.0977 66.6964C65.4741 69.7791 63.9557 72.6097 61.7325 74.8343L58.057 65.792C56.8722 62.8783 56.5724 59.68 57.1952 56.5968C57.818 53.5137 59.3358 50.6825 61.5587 48.4572Z" fill={color}/>
      <path opacity="0.8" d="M18.2674 5.16577L21.9428 14.2081C23.1277 17.1218 23.4274 20.3201 22.8046 23.4033C22.1818 26.4864 20.6641 29.3176 18.4411 31.5429L14.7611 22.4983C13.5773 19.5845 13.2785 16.3864 13.9021 13.3036C14.5258 10.2209 16.0441 7.39039 18.2674 5.16577Z" fill={color}/>
    </g>
    <defs>
      <clipPath id="muses-clip"><rect width="80" height="80" fill="white"/></clipPath>
    </defs>
  </svg>
);

const HomeIcon = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke={active ? "#E1C3FF" : "#6B7A9E"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={active ? "rgba(225,195,255,0.15)" : "none"}/>
    <path d="M9 22V12H15V22" stroke={active ? "#E1C3FF" : "#6B7A9E"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CoursesIcon = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke={active ? "#E1C3FF" : "#6B7A9E"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={active ? "rgba(225,195,255,0.15)" : "none"}/>
    <path d="M2 17L12 22L22 17" stroke={active ? "#E1C3FF" : "#6B7A9E"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12L12 17L22 12" stroke={active ? "#E1C3FF" : "#6B7A9E"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PracticeIcon = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke={active ? "#E1C3FF" : "#6B7A9E"} strokeWidth="2" fill={active ? "rgba(225,195,255,0.15)" : "none"}/>
    <polygon points="10,8 16,12 10,16" fill={active ? "#E1C3FF" : "#6B7A9E"}/>
  </svg>
);

const ProgressIcon = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <line x1="18" y1="20" x2="18" y2="10" stroke={active ? "#E1C3FF" : "#6B7A9E"} strokeWidth="2" strokeLinecap="round"/>
    <line x1="12" y1="20" x2="12" y2="4" stroke={active ? "#E1C3FF" : "#6B7A9E"} strokeWidth="2" strokeLinecap="round"/>
    <line x1="6" y1="20" x2="6" y2="14" stroke={active ? "#E1C3FF" : "#6B7A9E"} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ProfileIcon = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke={active ? "#E1C3FF" : "#6B7A9E"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="7" r="4" stroke={active ? "#E1C3FF" : "#6B7A9E"} strokeWidth="2" fill={active ? "rgba(225,195,255,0.15)" : "none"}/>
  </svg>
);

const StarIcon = ({ filled = true }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? "#F5C842" : "none"} stroke="#F5C842" strokeWidth="2">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
  </svg>
);

const PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
    <polygon points="5,3 19,12 5,21"/>
  </svg>
);

const LockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7A9E" strokeWidth="2">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20,6 9,17 4,12"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9BA8C7" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12,6 12,12 16,14"/>
  </svg>
);

const MusicNoteIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E1C3FF" strokeWidth="2">
    <path d="M9 18V5l12-2v13"/>
    <circle cx="6" cy="18" r="3"/>
    <circle cx="18" cy="16" r="3"/>
  </svg>
);

const FlameIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 01-7 7 7 7 0 01-5.196-2.304" fill="url(#flame-grad)" stroke="none"/>
    <defs>
      <linearGradient id="flame-grad" x1="12" y1="3" x2="12" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF8C42"/>
        <stop offset="1" stopColor="#FF4242"/>
      </linearGradient>
    </defs>
  </svg>
);

const BellIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9BA8C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
    <path d="M13.73 21a2 2 0 01-3.46 0"/>
  </svg>
);

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B7A9E" strokeWidth="2" strokeLinecap="round">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7A9E" strokeWidth="2" strokeLinecap="round">
    <polyline points="9,18 15,12 9,6"/>
  </svg>
);

const TrophyIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M6 9H4.5a2.5 2.5 0 010-5H6" stroke="#F5C842" strokeWidth="2" strokeLinecap="round"/>
    <path d="M18 9h1.5a2.5 2.5 0 000-5H18" stroke="#F5C842" strokeWidth="2" strokeLinecap="round"/>
    <path d="M4 22h16" stroke="#F5C842" strokeWidth="2" strokeLinecap="round"/>
    <path d="M10 22v-4" stroke="#F5C842" strokeWidth="2" strokeLinecap="round"/>
    <path d="M14 22v-4" stroke="#F5C842" strokeWidth="2" strokeLinecap="round"/>
    <path d="M8 2h8v10a4 4 0 01-8 0V2z" fill="rgba(245,200,66,0.2)" stroke="#F5C842" strokeWidth="2"/>
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────
const COURSES = [
  {
    id: 1,
    title: "Piano Fundamentals",
    instructor: "Sarah Chen",
    level: "Beginner",
    lessons: 24,
    duration: "8h 30m",
    rating: 4.9,
    students: 1240,
    progress: 65,
    color: "#7C3AED",
    gradientEnd: "#4F46E5",
    category: "Piano",
    enrolled: true,
    image: "🎹",
    description: "Master the basics of piano from note reading to your first full songs.",
  },
  {
    id: 2,
    title: "Music Theory Essentials",
    instructor: "Marcus Wells",
    level: "Beginner",
    lessons: 18,
    duration: "5h 45m",
    rating: 4.8,
    students: 2100,
    progress: 30,
    color: "#0EA5E9",
    gradientEnd: "#06B6D4",
    category: "Theory",
    enrolled: true,
    image: "🎼",
    description: "Understand scales, chords, rhythm and harmony from the ground up.",
  },
  {
    id: 3,
    title: "Fingerstyle Guitar",
    instructor: "Elena Russo",
    level: "Intermediate",
    lessons: 32,
    duration: "12h 10m",
    rating: 4.7,
    students: 876,
    progress: 0,
    color: "#D97706",
    gradientEnd: "#DC2626",
    category: "Guitar",
    enrolled: false,
    image: "🎸",
    description: "Develop expressive fingerpicking techniques for classical and folk styles.",
  },
  {
    id: 4,
    title: "Vocal Training Pro",
    instructor: "Amara Diallo",
    level: "All Levels",
    lessons: 28,
    duration: "9h 20m",
    rating: 4.9,
    students: 3400,
    progress: 0,
    color: "#EC4899",
    gradientEnd: "#8B5CF6",
    category: "Vocals",
    enrolled: false,
    image: "🎤",
    description: "Strengthen your voice with breathing exercises, range work, and performance tips.",
  },
  {
    id: 5,
    title: "Electronic Music Production",
    instructor: "DJ Kova",
    level: "Intermediate",
    lessons: 40,
    duration: "16h 00m",
    rating: 4.6,
    students: 1580,
    progress: 0,
    color: "#10B981",
    gradientEnd: "#059669",
    category: "Production",
    enrolled: false,
    image: "🎧",
    description: "Create beats, synths, and full tracks using modern DAW techniques.",
  },
  {
    id: 6,
    title: "Violin Mastery",
    instructor: "Yuki Tanaka",
    level: "Advanced",
    lessons: 36,
    duration: "14h 30m",
    rating: 4.8,
    students: 432,
    progress: 0,
    color: "#F59E0B",
    gradientEnd: "#EF4444",
    category: "Violin",
    enrolled: false,
    image: "🎻",
    description: "Refine intonation, bowing technique, and musicality at an advanced level.",
  },
];

const LESSONS = [
  { id: 1, title: "Introduction to Notes", duration: "12:30", completed: true, locked: false },
  { id: 2, title: "Hand Positioning", duration: "18:45", completed: true, locked: false },
  { id: 3, title: "Reading Sheet Music", duration: "22:00", completed: true, locked: false },
  { id: 4, title: "Your First Melody", duration: "28:15", completed: false, locked: false, current: true },
  { id: 5, title: "Rhythm & Timing", duration: "20:00", completed: false, locked: false },
  { id: 6, title: "Left Hand Basics", duration: "25:30", completed: false, locked: true },
  { id: 7, title: "Chord Progressions", duration: "30:00", completed: false, locked: true },
  { id: 8, title: "Putting It All Together", duration: "35:00", completed: false, locked: true },
];

const ACHIEVEMENTS = [
  { id: 1, icon: "🎵", title: "First Note", desc: "Completed your first lesson", earned: true },
  { id: 2, icon: "🔥", title: "7-Day Streak", desc: "Practiced 7 days in a row", earned: true },
  { id: 3, icon: "⭐", title: "Rising Star", desc: "Completed 10 lessons", earned: true },
  { id: 4, icon: "🏆", title: "Course Champion", desc: "Finished a full course", earned: false },
  { id: 5, icon: "🎹", title: "Piano Prodigy", desc: "Mastered all piano basics", earned: false },
  { id: 6, icon: "🎓", title: "Graduate", desc: "Earned a certificate", earned: false },
];

const CATEGORIES = ["All", "Piano", "Guitar", "Vocals", "Theory", "Production", "Violin"];

// ─── Components ───────────────────────────────────────────────────────────────

const ProgressBar = ({ value, color = "#E1C3FF", height = 6, bg = "rgba(255,255,255,0.1)" }) => (
  <div style={{ background: bg, borderRadius: 99, height, overflow: "hidden" }}>
    <div
      style={{
        width: `${value}%`,
        height: "100%",
        background: `linear-gradient(90deg, ${color}, #B794F4)`,
        borderRadius: 99,
        transition: "width 0.8s cubic-bezier(.4,0,.2,1)",
      }}
    />
  </div>
);

const CourseCard = ({ course, onClick }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={() => onClick(course)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: `linear-gradient(135deg, ${course.color}22, ${course.gradientEnd}11)`,
        border: `1px solid ${course.color}44`,
        borderRadius: 20,
        padding: "18px",
        cursor: "pointer",
        transform: hovered ? "translateY(-3px) scale(1.01)" : "translateY(0) scale(1)",
        transition: "all 0.25s cubic-bezier(.4,0,.2,1)",
        boxShadow: hovered ? `0 12px 32px ${course.color}33` : "none",
        minWidth: 200,
        flexShrink: 0,
      }}
    >
      <div style={{ fontSize: 36, marginBottom: 10 }}>{course.image}</div>
      <div style={{ fontSize: 11, color: course.color, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>
        {course.category}
      </div>
      <div style={{ fontSize: 15, fontWeight: 700, color: "#F0E6FF", marginBottom: 4, lineHeight: 1.3 }}>
        {course.title}
      </div>
      <div style={{ fontSize: 12, color: "#9BA8C7", marginBottom: 10 }}>{course.instructor}</div>
      {course.enrolled && course.progress > 0 && (
        <>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
            <span style={{ fontSize: 11, color: "#9BA8C7" }}>Progress</span>
            <span style={{ fontSize: 11, color: "#E1C3FF", fontWeight: 700 }}>{course.progress}%</span>
          </div>
          <ProgressBar value={course.progress} color={course.color} />
        </>
      )}
      {!course.enrolled && (
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {[...Array(5)].map((_, i) => <StarIcon key={i} filled={i < Math.floor(course.rating)} />)}
          <span style={{ fontSize: 12, color: "#9BA8C7", marginLeft: 2 }}>{course.rating}</span>
        </div>
      )}
      <div style={{ display: "flex", gap: 12, marginTop: 10 }}>
        <span style={{ fontSize: 11, color: "#9BA8C7", display: "flex", alignItems: "center", gap: 3 }}>
          <ClockIcon /> {course.duration}
        </span>
        <span style={{ fontSize: 11, color: "#9BA8C7" }}>
          {course.lessons} lessons
        </span>
      </div>
    </div>
  );
};

// ─── Screens ──────────────────────────────────────────────────────────────────

function HomeScreen({ onCourseClick }) {
  const enrolled = COURSES.filter((c) => c.enrolled);
  const recommended = COURSES.filter((c) => !c.enrolled).slice(0, 3);

  return (
    <div style={{ paddingBottom: 100 }}>
      {/* Header */}
      <div style={{ padding: "20px 20px 0", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{ fontSize: 13, color: "#9BA8C7", marginBottom: 2 }}>Good morning 👋</div>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#F0E6FF" }}>Welcome back,</div>
          <div style={{ fontSize: 22, fontWeight: 800, background: "linear-gradient(90deg,#E1C3FF,#B794F4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Alex
          </div>
        </div>
        <button style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: 10, cursor: "pointer", position: "relative" }}>
          <BellIcon />
          <div style={{ position: "absolute", top: 8, right: 8, width: 8, height: 8, background: "#E1C3FF", borderRadius: "50%", border: "2px solid #020C1E" }} />
        </button>
      </div>

      {/* Streak Banner */}
      <div style={{ margin: "20px 20px 0", background: "linear-gradient(135deg,#7C3AED22,#4F46E522)", border: "1px solid rgba(225,195,255,0.2)", borderRadius: 18, padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontSize: 13, color: "#9BA8C7", marginBottom: 2 }}>Current Streak</div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <FlameIcon />
            <span style={{ fontSize: 24, fontWeight: 800, color: "#FF8C42" }}>7 days</span>
          </div>
          <div style={{ fontSize: 12, color: "#9BA8C7", marginTop: 2 }}>Keep it up! Practice today to maintain your streak.</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <TrophyIcon />
          <div style={{ fontSize: 11, color: "#F5C842", marginTop: 4, fontWeight: 600 }}>Level 4</div>
        </div>
      </div>

      {/* Daily Goal */}
      <div style={{ margin: "16px 20px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: "#C4B5FD" }}>Daily Goal</span>
          <span style={{ fontSize: 13, color: "#E1C3FF", fontWeight: 700 }}>18 / 30 min</span>
        </div>
        <ProgressBar value={60} height={8} />
      </div>

      {/* Continue Learning */}
      <div style={{ marginTop: 28 }}>
        <div style={{ padding: "0 20px", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <span style={{ fontSize: 17, fontWeight: 800, color: "#F0E6FF" }}>Continue Learning</span>
          <span style={{ fontSize: 13, color: "#E1C3FF", fontWeight: 600, cursor: "pointer" }}>See all</span>
        </div>
        <div style={{ display: "flex", gap: 14, paddingLeft: 20, overflowX: "auto", paddingBottom: 8, scrollbarWidth: "none" }}>
          {enrolled.map((c) => (
            <CourseCard key={c.id} course={c} onClick={onCourseClick} />
          ))}
        </div>
      </div>

      {/* Upcoming Lesson */}
      <div style={{ margin: "20px 20px 0", background: "linear-gradient(135deg,#7C3AED,#4F46E5)", borderRadius: 20, padding: "18px 20px" }}>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", marginBottom: 4, textTransform: "uppercase", letterSpacing: 1 }}>Up Next</div>
        <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 2 }}>Your First Melody</div>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", marginBottom: 14 }}>Piano Fundamentals · Lesson 4 · 28:15</div>
        <button style={{ background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 12, padding: "10px 20px", color: "#fff", fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
          <PlayIcon /> Resume Lesson
        </button>
      </div>

      {/* Recommended */}
      <div style={{ marginTop: 28 }}>
        <div style={{ padding: "0 20px", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <span style={{ fontSize: 17, fontWeight: 800, color: "#F0E6FF" }}>Recommended</span>
          <span style={{ fontSize: 13, color: "#E1C3FF", fontWeight: 600, cursor: "pointer" }}>Explore</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: "0 20px" }}>
          {recommended.map((c) => (
            <div key={c.id} onClick={() => onCourseClick(c)} style={{ display: "flex", gap: 14, alignItems: "center", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: "14px", cursor: "pointer" }}>
              <div style={{ fontSize: 32, width: 56, height: 56, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", background: `linear-gradient(135deg, ${c.color}33, ${c.gradientEnd}22)`, flexShrink: 0 }}>{c.image}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#F0E6FF", marginBottom: 2 }}>{c.title}</div>
                <div style={{ fontSize: 12, color: "#9BA8C7", marginBottom: 6 }}>{c.instructor}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ display: "flex", gap: 2 }}>
                    {[...Array(5)].map((_, i) => <StarIcon key={i} filled={i < Math.floor(c.rating)} />)}
                  </div>
                  <span style={{ fontSize: 11, color: "#9BA8C7" }}>{c.rating} · {c.students.toLocaleString()} students</span>
                </div>
              </div>
              <ChevronRightIcon />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CoursesScreen({ onCourseClick }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = COURSES.filter((c) => {
    const matchCat = activeCategory === "All" || c.category === activeCategory;
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase()) || c.instructor.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div style={{ paddingBottom: 100 }}>
      <div style={{ padding: "24px 20px 0" }}>
        <div style={{ fontSize: 22, fontWeight: 800, color: "#F0E6FF", marginBottom: 16 }}>Explore Courses</div>

        {/* Search */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14, padding: "10px 14px", marginBottom: 16 }}>
          <SearchIcon />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search courses or instructors..."
            style={{ background: "transparent", border: "none", outline: "none", color: "#F0E6FF", fontSize: 14, flex: 1, fontFamily: "inherit" }}
          />
        </div>

        {/* Categories */}
        <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4, scrollbarWidth: "none", marginBottom: 20 }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                flexShrink: 0,
                padding: "7px 16px",
                borderRadius: 99,
                border: activeCategory === cat ? "none" : "1px solid rgba(255,255,255,0.12)",
                background: activeCategory === cat ? "linear-gradient(135deg,#7C3AED,#4F46E5)" : "transparent",
                color: activeCategory === cat ? "#fff" : "#9BA8C7",
                fontSize: 13,
                fontWeight: activeCategory === cat ? 700 : 500,
                cursor: "pointer",
                transition: "all 0.2s",
                fontFamily: "inherit",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {filtered.map((c) => (
            <div
              key={c.id}
              onClick={() => onCourseClick(c)}
              style={{
                background: `linear-gradient(145deg, ${c.color}22, ${c.gradientEnd}11)`,
                border: `1px solid ${c.color}33`,
                borderRadius: 18,
                padding: 16,
                cursor: "pointer",
              }}
            >
              <div style={{ fontSize: 30, marginBottom: 10 }}>{c.image}</div>
              <div style={{ fontSize: 10, color: c.color, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{c.category}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#F0E6FF", marginBottom: 4, lineHeight: 1.3 }}>{c.title}</div>
              <div style={{ fontSize: 11, color: "#9BA8C7", marginBottom: 8 }}>{c.instructor}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 3, marginBottom: 8 }}>
                <StarIcon />
                <span style={{ fontSize: 11, color: "#9BA8C7" }}>{c.rating}</span>
              </div>
              <div style={{ fontSize: 11, color: "#9BA8C7", display: "flex", alignItems: "center", gap: 3 }}>
                <ClockIcon /> {c.duration}
              </div>
              {c.enrolled && c.progress > 0 && (
                <div style={{ marginTop: 10 }}>
                  <ProgressBar value={c.progress} color={c.color} height={4} />
                </div>
              )}
              {!c.enrolled && (
                <div style={{ marginTop: 10, fontSize: 11, color: "#E1C3FF", fontWeight: 700, padding: "4px 10px", background: "rgba(225,195,255,0.1)", borderRadius: 8, display: "inline-block" }}>
                  Enroll
                </div>
              )}
            </div>
          ))}
        </div>
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", color: "#9BA8C7", padding: "40px 0" }}>
            <div style={{ fontSize: 36, marginBottom: 10 }}>🎵</div>
            <div>No courses found</div>
          </div>
        )}
      </div>
    </div>
  );
}

function PracticeScreen() {
  const [playing, setPlaying] = useState(false);
  const [activeTool, setActiveTool] = useState("metronome");
  const [bpm, setBpm] = useState(80);
  const [beatCount, setBeatCount] = useState(0);
  const intervalRef = useRef(null);

  const togglePlay = () => {
    if (playing) {
      clearInterval(intervalRef.current);
      setPlaying(false);
      setBeatCount(0);
    } else {
      setPlaying(true);
      intervalRef.current = setInterval(() => {
        setBeatCount((prev) => (prev + 1) % 4);
      }, (60 / bpm) * 1000);
    }
  };

  useEffect(() => {
    if (playing) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setBeatCount((prev) => (prev + 1) % 4);
      }, (60 / bpm) * 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [bpm]);

  useEffect(() => () => clearInterval(intervalRef.current), []);

  const tools = [
    { id: "metronome", label: "Metronome", icon: "🎯" },
    { id: "tuner", label: "Tuner", icon: "🎸" },
    { id: "recorder", label: "Recorder", icon: "🎙️" },
  ];

  return (
    <div style={{ padding: "24px 20px", paddingBottom: 100 }}>
      <div style={{ fontSize: 22, fontWeight: 800, color: "#F0E6FF", marginBottom: 20 }}>Practice Tools</div>

      {/* Tool Tabs */}
      <div style={{ display: "flex", gap: 8, marginBottom: 24, background: "rgba(255,255,255,0.04)", borderRadius: 14, padding: 4 }}>
        {tools.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTool(t.id)}
            style={{
              flex: 1,
              padding: "10px 0",
              borderRadius: 10,
              border: "none",
              background: activeTool === t.id ? "linear-gradient(135deg,#7C3AED,#4F46E5)" : "transparent",
              color: activeTool === t.id ? "#fff" : "#9BA8C7",
              fontSize: 13,
              fontWeight: 700,
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "all 0.2s",
            }}
          >
            {t.icon} {t.label}
          </button>
        ))}
      </div>

      {/* Metronome */}
      {activeTool === "metronome" && (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
          {/* Beat Dots */}
          <div style={{ display: "flex", gap: 16 }}>
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  background: i === beatCount && playing ? "#E1C3FF" : "rgba(225,195,255,0.2)",
                  boxShadow: i === beatCount && playing ? "0 0 16px #E1C3FF" : "none",
                  transition: "all 0.1s",
                }}
              />
            ))}
          </div>

          {/* BPM Display */}
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 72, fontWeight: 800, color: "#F0E6FF", lineHeight: 1, letterSpacing: -2 }}>{bpm}</div>
            <div style={{ fontSize: 14, color: "#9BA8C7", marginTop: 4 }}>BPM</div>
          </div>

          {/* BPM Slider */}
          <div style={{ width: "100%", maxWidth: 280 }}>
            <input
              type="range"
              min={40}
              max={220}
              value={bpm}
              onChange={(e) => setBpm(Number(e.target.value))}
              style={{ width: "100%", accentColor: "#7C3AED" }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#6B7A9E", marginTop: 4 }}>
              <span>40 BPM (Largo)</span>
              <span>220 BPM (Prestissimo)</span>
            </div>
          </div>

          {/* Tempo Label */}
          <div style={{ fontSize: 14, color: "#E1C3FF", fontWeight: 600 }}>
            {bpm < 60 ? "Largo" : bpm < 76 ? "Adagio" : bpm < 108 ? "Andante" : bpm < 120 ? "Moderato" : bpm < 156 ? "Allegro" : "Presto"}
          </div>

          {/* Play Button */}
          <button
            onClick={togglePlay}
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: playing ? "linear-gradient(135deg,#EF4444,#DC2626)" : "linear-gradient(135deg,#7C3AED,#4F46E5)",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: playing ? "0 0 30px rgba(239,68,68,0.4)" : "0 0 30px rgba(124,58,237,0.4)",
              transition: "all 0.25s",
            }}
          >
            {playing ? (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><polygon points="5,3 19,12 5,21"/></svg>
            )}
          </button>

          {/* BPM Presets */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
            {[60, 80, 100, 120, 140].map((v) => (
              <button
                key={v}
                onClick={() => setBpm(v)}
                style={{
                  padding: "6px 14px",
                  borderRadius: 99,
                  border: bpm === v ? "none" : "1px solid rgba(255,255,255,0.12)",
                  background: bpm === v ? "rgba(124,58,237,0.5)" : "transparent",
                  color: bpm === v ? "#E1C3FF" : "#9BA8C7",
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                {v}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Tuner */}
      {activeTool === "tuner" && (
        <div style={{ textAlign: "center", padding: "20px 0" }}>
          <div style={{ fontSize: 80, fontWeight: 800, color: "#E1C3FF", letterSpacing: -2 }}>A4</div>
          <div style={{ fontSize: 18, color: "#9BA8C7", marginBottom: 24 }}>440 Hz</div>
          <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 20, padding: 20, marginBottom: 20 }}>
            <div style={{ height: 60, display: "flex", alignItems: "center", justifyContent: "center", gap: 3 }}>
              {Array.from({ length: 20 }, (_, i) => (
                <div
                  key={i}
                  style={{
                    width: 6,
                    height: Math.sin((i / 19) * Math.PI) * 50 + 10,
                    background: i === 10 ? "#4ADE80" : `rgba(225,195,255,${0.1 + Math.sin((i / 19) * Math.PI) * 0.4})`,
                    borderRadius: 99,
                  }}
                />
              ))}
            </div>
          </div>
          <div style={{ fontSize: 13, color: "#4ADE80", fontWeight: 700 }}>● In Tune</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, marginTop: 24 }}>
            {["E2", "A2", "D3", "G3", "B3", "E4"].map((note) => (
              <div key={note} style={{ background: "rgba(255,255,255,0.05)", borderRadius: 12, padding: "12px 0", fontSize: 16, fontWeight: 700, color: "#C4B5FD", cursor: "pointer" }}>
                {note}
              </div>
            ))}
          </div>
          {/* TODO: Implement real microphone input for tuner */}
        </div>
      )}

      {/* Recorder */}
      {activeTool === "recorder" && (
        <div style={{ textAlign: "center", padding: "20px 0" }}>
          <div style={{ fontSize: 14, color: "#9BA8C7", marginBottom: 24 }}>Record your practice session</div>
          <div style={{ width: 100, height: 100, borderRadius: "50%", background: "linear-gradient(135deg,#EF444422,#DC262622)", border: "2px solid #EF444455", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", fontSize: 36 }}>
            🎙️
          </div>
          <button style={{ background: "linear-gradient(135deg,#EF4444,#DC2626)", border: "none", borderRadius: 99, padding: "14px 32px", color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>
            Start Recording
          </button>
          <div style={{ marginTop: 24, color: "#9BA8C7", fontSize: 13 }}>00:00:00</div>
          {/* TODO: Implement real audio recording via MediaRecorder API */}
          <div style={{ marginTop: 30, background: "rgba(255,255,255,0.04)", borderRadius: 16, padding: 16 }}>
            <div style={{ fontSize: 13, color: "#9BA8C7", marginBottom: 10 }}>Previous Recordings</div>
            {["Practice Session — Today", "Scales Exercise — Yesterday"].map((r, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderBottom: i === 0 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                <span style={{ fontSize: 13, color: "#C4B5FD" }}>{r}</span>
                <PlayIcon />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ProgressScreen() {
  const totalMinutes = 420;
  const weekData = [30, 45, 20, 60, 35, 55, 18];
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const maxVal = Math.max(...weekData);

  return (
    <div style={{ padding: "24px 20px", paddingBottom: 100 }}>
      <div style={{ fontSize: 22, fontWeight: 800, color: "#F0E6FF", marginBottom: 20 }}>Your Progress</div>

      {/* Stats Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
        {[
          { label: "Total Practice", value: "7h 00m", icon: "⏱️", color: "#7C3AED" },
          { label: "Lessons Done", value: "24", icon: "✅", color: "#0EA5E9" },
          { label: "Day Streak", value: "7", icon: "🔥", color: "#F59E0B" },
          { label: "Level", value: "4", icon: "⭐", color: "#EC4899" },
        ].map((s) => (
          <div key={s.label} style={{ background: `${s.color}18`, border: `1px solid ${s.color}33`, borderRadius: 18, padding: "18px 16px" }}>
            <div style={{ fontSize: 22, marginBottom: 6 }}>{s.icon}</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: "#F0E6FF" }}>{s.value}</div>
            <div style={{ fontSize: 12, color: "#9BA8C7", marginTop: 2 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Weekly Chart */}
      <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, padding: "18px 16px", marginBottom: 20 }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: "#C4B5FD", marginBottom: 16 }}>This Week</div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 80 }}>
          {weekData.map((val, i) => (
            <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
              <div
                style={{
                  width: "100%",
                  height: (val / maxVal) * 70,
                  background: i === 6 ? "rgba(225,195,255,0.3)" : "linear-gradient(180deg,#7C3AED,#4F46E5)",
                  borderRadius: "6px 6px 0 0",
                  transition: "height 0.5s",
                }}
              />
              <div style={{ fontSize: 11, color: "#6B7A9E" }}>{days[i]}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 12, fontSize: 12, color: "#9BA8C7", textAlign: "center" }}>
          {totalMinutes} minutes practiced this week
        </div>
      </div>

      {/* Course Progress */}
      <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, padding: "18px 16px", marginBottom: 20 }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: "#C4B5FD", marginBottom: 16 }}>Course Progress</div>
        {COURSES.filter((c) => c.enrolled).map((c) => (
          <div key={c.id} style={{ marginBottom: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 18 }}>{c.image}</span>
                <span style={{ fontSize: 13, color: "#F0E6FF", fontWeight: 600 }}>{c.title}</span>
              </div>
              <span style={{ fontSize: 13, color: "#E1C3FF", fontWeight: 700 }}>{c.progress}%</span>
            </div>
            <ProgressBar value={c.progress} color={c.color} height={8} />
          </div>
        ))}
      </div>

      {/* Achievements */}
      <div style={{ fontSize: 15, fontWeight: 700, color: "#C4B5FD", marginBottom: 12 }}>Achievements</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
        {ACHIEVEMENTS.map((a) => (
          <div
            key={a.id}
            style={{
              background: a.earned ? "rgba(225,195,255,0.08)" : "rgba(255,255,255,0.02)",
              border: `1px solid ${a.earned ? "rgba(225,195,255,0.25)" : "rgba(255,255,255,0.06)"}`,
              borderRadius: 16,
              padding: "14px 10px",
              textAlign: "center",
              opacity: a.earned ? 1 : 0.5,
            }}
          >
            <div style={{ fontSize: 26, marginBottom: 6 }}>{a.icon}</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#F0E6FF", marginBottom: 2 }}>{a.title}</div>
            <div style={{ fontSize: 10, color: "#9BA8C7" }}>{a.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProfileScreen() {
  const [notif, setNotif] = useState(true);
  const [darkMode] = useState(true);
  const [dailyReminder, setDailyReminder] = useState(true);

  return (
    <div style={{ padding: "24px 20px", paddingBottom: 100 }}>
      {/* Avatar */}
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
        <div style={{ width: 72, height: 72, borderRadius: "50%", background: "linear-gradient(135deg,#7C3AED,#EC4899)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, fontWeight: 800, color: "#fff", flexShrink: 0 }}>
          A
        </div>
        <div>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#F0E6FF" }}>Alex Johnson</div>
          <div style={{ fontSize: 13, color: "#9BA8C7" }}>alex@example.com</div>
          <div style={{ display: "inline-block", marginTop: 6, fontSize: 11, fontWeight: 700, color: "#E1C3FF", background: "rgba(225,195,255,0.12)", border: "1px solid rgba(225,195,255,0.2)", borderRadius: 99, padding: "3px 10px" }}>
            ⭐ Level 4 — Musician
          </div>
        </div>
      </div>

      {/* Plan */}
      <div style={{ background: "linear-gradient(135deg,#7C3AED,#4F46E5)", borderRadius: 18, padding: "16px 20px", marginBottom: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", marginBottom: 4 }}>Current Plan</div>
          <div style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>Pro Learner</div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 2 }}>Renews Jan 15, 2026</div>
        </div>
        <button style={{ background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 12, padding: "8px 16px", color: "#fff", fontWeight: 700, fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>
          Manage
        </button>
      </div>

      {/* Settings Sections */}
      {[
        {
          title: "Preferences",
          items: [
            { label: "Push Notifications", toggle: true, value: notif, onChange: setNotif },
            { label: "Daily Reminder", toggle: true, value: dailyReminder, onChange: setDailyReminder },
            { label: "Dark Mode", toggle: true, value: darkMode, onChange: () => {} },
          ],
        },
        {
          title: "Account",
          items: [
            { label: "Edit Profile", arrow: true },
            { label: "Change Password", arrow: true },
            { label: "Payment Methods", arrow: true },
            { label: "Download Certificates", arrow: true },
          ],
        },
        {
          title: "Support",
          items: [
            { label: "Help Center", arrow: true },
            { label: "Contact Support", arrow: true },
            { label: "Privacy Policy", arrow: true },
            { label: "Terms of Service", arrow: true },
          ],
        },
      ].map((section) => (
        <div key={section.title} style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 12, color: "#6B7A9E", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>
            {section.title}
          </div>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, overflow: "hidden" }}>
            {section.items.map((item, idx) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "15px 16px",
                  borderBottom: idx < section.items.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  cursor: "pointer",
                }}
              >
                <span style={{ fontSize: 14, color: "#F0E6FF" }}>{item.label}</span>
                {item.toggle && (
                  <div
                    onClick={() => item.onChange(!item.value)}
                    style={{
                      width: 44,
                      height: 24,
                      borderRadius: 99,
                      background: item.value ? "#7C3AED" : "rgba(255,255,255,0.15)",
                      position: "relative",
                      cursor: "pointer",
                      transition: "background 0.2s",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 3,
                        left: item.value ? 22 : 3,
                        width: 18,
                        height: 18,
                        borderRadius: "50%",
                        background: "#fff",
                        transition: "left 0.2s",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
                      }}
                    />
                  </div>
                )}
                {item.arrow && <ChevronRightIcon />}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Sign Out */}
      <button style={{ width: "100%", padding: "15px", borderRadius: 16, border: "1px solid rgba(239,68,68,0.3)", background: "rgba(239,68,68,0.08)", color: "#EF4444", fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>
        Sign Out
      </button>

      <div style={{ textAlign: "center", marginTop: 20, fontSize: 11, color: "#3D4F6E" }}>
        Muselle Academy v1.0.0
      </div>
    </div>
  );
}

function CourseDetailScreen({ course, onBack }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [enrolled, setEnrolled] = useState(course.enrolled);

  return (
    <div style={{ paddingBottom: 100, minHeight: "100vh" }}>
      {/* Hero */}
      <div style={{ background: `linear-gradient(160deg, ${course.color}, ${course.gradientEnd})`, padding: "20px 20px 30px", position: "relative" }}>
        <button onClick={onBack} style={{ background: "rgba(0,0,0,0.25)", border: "none", borderRadius: 10, padding: "8px 12px", color: "#fff", cursor: "pointer", fontSize: 13, fontWeight: 600, marginBottom: 16, display: "flex", alignItems: "center", gap: 6, fontFamily: "inherit" }}>
          ← Back
        </button>
        <div style={{ fontSize: 52, marginBottom: 12 }}>{course.image}</div>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.8)", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>{course.category} · {course.level}</div>
        <div style={{ fontSize: 22, fontWeight: 800, color: "#fff", marginBottom: 6, lineHeight: 1.3 }}>{course.title}</div>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", marginBottom: 12 }}>by {course.instructor}</div>
        <div style={{ display: "flex", gap: 16 }}>
          {[
            { icon: "⭐", val: `${course.rating} Rating` },
            { icon: "👥", val: `${course.students.toLocaleString()} Students` },
            { icon: "📚", val: `${course.lessons} Lessons` },
            { icon: "⏱️", val: course.duration },
          ].map((s) => (
            <div key={s.val} style={{ fontSize: 11, color: "rgba(255,255,255,0.85)", display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
              <span style={{ fontSize: 16 }}>{s.icon}</span>
              <span>{s.val}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Enroll Button */}
      <div style={{ padding: "16px 20px" }}>
        {!enrolled ? (
          <button
            onClick={() => setEnrolled(true)}
            style={{ width: "100%", padding: "15px", borderRadius: 16, border: "none", background: `linear-gradient(135deg, ${course.color}, ${course.gradientEnd})`, color: "#fff", fontSize: 16, fontWeight: 800, cursor: "pointer", fontFamily: "inherit", boxShadow: `0 6px 24px ${course.color}55` }}
          >
            Enroll Now — Free
          </button>
        ) : (
          <button style={{ width: "100%", padding: "15px", borderRadius: 16, border: "none", background: "linear-gradient(135deg,#4ADE80,#16A34A)", color: "#fff", fontSize: 16, fontWeight: 800, cursor: "pointer", fontFamily: "inherit" }}>
            ✅ Enrolled — Continue Learning
          </button>
        )}
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", padding: "0 20px", gap: 4, background: "rgba(255,255,255,0.02)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        {["overview", "lessons", "instructor"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              flex: 1,
              padding: "12px 0",
              border: "none",
              background: "transparent",
              color: activeTab === tab ? "#E1C3FF" : "#6B7A9E",
              borderBottom: activeTab === tab ? "2px solid #E1C3FF" : "2px solid transparent",
              fontSize: 13,
              fontWeight: 700,
              cursor: "pointer",
              fontFamily: "inherit",
              textTransform: "capitalize",
              transition: "all 0.2s",
            }}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div style={{ padding: "20px" }}>
        {/* Overview */}
        {activeTab === "overview" && (
          <>
            <div style={{ fontSize: 14, color: "#9BA8C7", lineHeight: 1.7, marginBottom: 20 }}>{course.description}</div>
            {enrolled && course.progress > 0 && (
              <div style={{ marginBottom: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#C4B5FD" }}>Your Progress</span>
                  <span style={{ fontSize: 14, color: "#E1C3FF", fontWeight: 700 }}>{course.progress}%</span>
                </div>
                <ProgressBar value={course.progress} color={course.color} height={10} />
              </div>
            )}
            <div style={{ fontSize: 15, fontWeight: 700, color: "#C4B5FD", marginBottom: 12 }}>What you'll learn</div>
            {["Music fundamentals and technique", "Practice methods that build real skill", "Performance and expression", "Theory to support your playing"].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <CheckIcon />
                <span style={{ fontSize: 13, color: "#9BA8C7" }}>{item}</span>
              </div>
            ))}
          </>
        )}

        {/* Lessons */}
        {activeTab === "lessons" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {LESSONS.map((lesson) => (
              <div
                key={lesson.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "14px 16px",
                  background: lesson.current ? `${course.color}22` : "rgba(255,255,255,0.03)",
                  border: `1px solid ${lesson.current ? course.color + "66" : "rgba(255,255,255,0.07)"}`,
                  borderRadius: 14,
                  opacity: lesson.locked ? 0.5 : 1,
                  cursor: lesson.locked ? "not-allowed" : "pointer",
                }}
              >
                <div style={{ width: 36, height: 36, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: lesson.completed ? "rgba(74,222,128,0.2)" : lesson.current ? `${course.color}44` : "rgba(255,255,255,0.05)", flexShrink: 0 }}>
                  {lesson.completed ? <CheckIcon /> : lesson.locked ? <LockIcon /> : lesson.current ? <PlayIcon /> : <span style={{ fontSize: 13, color: "#6B7A9E", fontWeight: 700 }}>{lesson.id}</span>}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: lesson.current ? "#E1C3FF" : "#F0E6FF" }}>{lesson.title}</div>
                  <div style={{ fontSize: 11, color: "#6B7A9E", marginTop: 2, display: "flex", alignItems: "center", gap: 3 }}>
                    <ClockIcon /> {lesson.duration}
                  </div>
                </div>
                {lesson.current && (
                  <div style={{ fontSize: 11, color: course.color, fontWeight: 700, background: `${course.color}22`, padding: "4px 8px", borderRadius: 6 }}>
                    Current
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Instructor */}
        {activeTab === "instructor" && (
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
              <div style={{ width: 60, height: 60, borderRadius: "50%", background: `linear-gradient(135deg, ${course.color}, ${course.gradientEnd})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, color: "#fff", fontWeight: 800 }}>
                {course.instructor[0]}
              </div>
              <div>
                <div style={{ fontSize: 17, fontWeight: 800, color: "#F0E6FF" }}>{course.instructor}</div>
                <div style={{ fontSize: 13, color: "#9BA8C7" }}>Professional Musician & Educator</div>
                <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 4 }}>
                  <StarIcon />
                  <span style={{ fontSize: 12, color: "#9BA8C7" }}>{course.rating} instructor rating</span>
                </div>
              </div>
            </div>
            <div style={{ fontSize: 14, color: "#9BA8C7", lineHeight: 1.7 }}>
              {/* TODO: Fetch real instructor bio from API */}
              A passionate musician and educator with over 15 years of teaching experience. Dedicated to helping students unlock their musical potential through clear, structured, and inspiring lessons.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Loader ───────────────────────────────────────────────────────────────────
function Loader() {
  return (
    <div style={{ position: "fixed", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "#020C1E", zIndex: 9999, flexDirection: "column", gap: 20 }}>
      <div style={{ animation: "spin 2s linear infinite", display: "flex" }}>
        <MusesIcon size={80} color="#E1C3FF" />
      </div>
      <div style={{ color: "#E1C3FF", fontSize: 14, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", opacity: 0.7 }}>
        Loading...
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

// ─── Bottom Nav ───────────────────────────────────────────────────────────────
function BottomNav({ active, onChange }) {
  const tabs = [
    { id: "home", label: "Home", Icon: HomeIcon },
    { id: "courses", label: "Courses", Icon: CoursesIcon },
    { id: "practice", label: "Practice", Icon: PracticeIcon },
    { id: "progress", label: "Progress", Icon: ProgressIcon },
    { id: "profile", label: "Profile", Icon: ProfileIcon },
  ];

  return (
    <div style={{
      position: "fixed",
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%)",
      width: "100%",
      maxWidth: 480,
      background: "rgba(2,12,30,0.95)",
      backdropFilter: "blur(20px)",
      borderTop: "1px solid rgba(225,195,255,0.1)",
      display: "flex",
      zIndex: 100,
      paddingBottom: "env(safe-area-inset-bottom, 0px)",
    }}>
      {tabs.map((t) => (
        <button
          key={t.id}
          onClick={() => onChange(t.id)}
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
            padding: "10px 0",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          <t.Icon active={active === t.id} />
          <span style={{ fontSize: 10, color: active === t.id ? "#E1C3FF" : "#6B7A9E", fontWeight: active === t.id ? 700 : 500, transition: "color 0.2s" }}>
            {t.label}
          </span>
        </button>
      ))}
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [loading, setLoading] = useState(true);
  const [screen, setScreen] = useState("home");
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(t);
  }, []);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setScreen("courseDetail");
  };

  const handleBackFromCourse = () => {
    setSelectedCourse(null);
    setScreen("courses");
  };

  if (loading) return <Loader />;

  return (
    <div style={{
      minHeight: "100dvh",
      background: "#020C1E",
      fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      color: "#F0E6FF",
      maxWidth: 480,
      margin: "0 auto",
      position: "relative",
      overflowX: "hidden",
    }}>
      {/* Top Bar (not shown on courseDetail) */}
      {screen !== "courseDetail" && (
        <div style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(2,12,30,0.9)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(225,195,255,0.07)",
          padding: "14px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <MusesIcon size={28} color="#E1C3FF" />
            <span style={{ fontSize: 17, fontWeight: 800, background: "linear-gradient(90deg,#E1C3FF,#B794F4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Muselle Academy
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 4, background: "rgba(245,200,66,0.1)", border: "1px solid rgba(245,200,66,0.25)", borderRadius: 99, padding: "4px 10px" }}>
              <FlameIcon />
              <span style={{ fontSize: 12, color: "#F5C842", fontWeight: 700 }}>7</span>
            </div>
          </div>
        </div>
      )}

      {/* Scrollable Content */}
      <div style={{ overflowY: "auto", height: screen === "courseDetail" ? "100dvh" : "calc(100dvh - 57px)", scrollbarWidth: "none" }}>
        <div style={{ opacity: 1, animation: "fadeIn 0.3s ease" }}>
          {screen === "home" && <HomeScreen onCourseClick={handleCourseClick} />}
          {screen === "courses" && <CoursesScreen onCourseClick={handleCourseClick} />}
          {screen === "practice" && <PracticeScreen />}
          {screen === "progress" && <ProgressScreen />}
          {screen === "profile" && <ProfileScreen />}
          {screen === "courseDetail" && selectedCourse && (
            <CourseDetailScreen course={selectedCourse} onBack={handleBackFromCourse} />
          )}
        </div>
      </div>

      {/* Bottom Nav (not shown on courseDetail) */}
      {screen !== "courseDetail" && (
        <BottomNav active={screen} onChange={setScreen} />
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        * { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
        ::-webkit-scrollbar { display: none; }
        input[type=range] { -webkit-appearance: none; appearance: none; height: 4px; border-radius: 99px; outline: none; }
        input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; width: 20px; height: 20px; border-radius: 50%; background: #7C3AED; cursor: pointer; box-shadow: 0 0 8px rgba(124,58,237,0.5); }
      `}</style>
    </div>
  );
}