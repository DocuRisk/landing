export function Video() {
    return (
        <video className="w-full mx-auto rounded-2xl shadow-2xl" autoPlay loop muted playsInline preload="auto" controls>
            <source src="/video.mp4" type="video/mp4" />
        </video>
    )
}