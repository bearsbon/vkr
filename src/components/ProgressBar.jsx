export default function ProgressBar({ percentage }) {
  return (
    <div class="progress__chart">
      <div class="barOverflow">
        <div
          class="bar"
          style={{
            transform: `rotate(${45 + percentage * 1.8}deg)`,
          }}></div>
      </div>
      <span className="percentage">{percentage}%</span>
    </div>
  );
}
