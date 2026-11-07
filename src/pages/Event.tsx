import { useState } from "react";
import VideoPlayer from "../components/ui/VideoPlayer";
import { liveEventVideo } from "../data/gallery";
import { useYouTubeLive } from "../hooks/useYouTubeLive";

type ChatMessage = {
  id: number;
  name: string;
  message: string;
  time: string;
};

const seededMessages: ChatMessage[] = [
  { id: 1, name: "Tomi", message: "We are all set! The ceremony is beautiful.", time: "Now" },
  { id: 2, name: "Bose", message: "Praying for a joyful celebration for the couple.", time: "Now" },
  { id: 3, name: "Dami", message: "This is so lovely. Sending love from all of us.", time: "Now" },
];

export default function Event() {
  const [messages, setMessages] = useState<ChatMessage[]>(seededMessages);
  const [name, setName] = useState("Guest");
  const [message, setMessage] = useState("");
  const live = useYouTubeLive();
  const currentLiveVideo = { ...liveEventVideo, videoId: live.videoId ?? "", title: live.title ?? liveEventVideo.title };

  const submitMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!message.trim()) return;

    setMessages((current) => [
      {
        id: Date.now(),
        name: name.trim() || "Guest",
        message: message.trim(),
        time: "Now",
      },
      ...current,
    ]);
    setMessage("");
  };

  return (
    <main className="bg-[#f8f5f1] px-4 py-8 md:px-8 md:py-12">
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="mb-6 text-left">
          <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-orange">
            Live stream
          </p>
        </div>

        <section className="overflow-hidden rounded-[22px] border border-brown/10 bg-[#121212] p-2 shadow-[0_25px_70px_rgba(38,26,13,0.10)] md:p-4">
          <div className="overflow-hidden rounded-[18px] bg-black">
            {live.status === "live" && currentLiveVideo.videoId ? (
              <VideoPlayer video={currentLiveVideo} />
            ) : (
              <div className="flex aspect-video w-full flex-col items-center justify-center bg-[#17120f] px-6 text-center text-white">
                <span className="mb-5 h-10 w-10 animate-spin rounded-full border-2 border-white/25 border-t-white" aria-hidden="true" />
                <h2 className="font-serif text-xl md:text-2xl">
                  {live.status === "offline" ? "The livestream has ended" : "Fetching the livestream"}
                </h2>
                <p className="mt-2 max-w-md text-sm text-white/70" role="status" aria-live="polite">
                  {live.status === "reconnecting"
                    ? "The stream was interrupted. We’re checking for the broadcast to resume or restart."
                    : live.status === "offline"
                      ? "There is no active livestream right now."
                      : live.status === "waiting"
                        ? "We’ll show the video here as soon as the livestream starts."
                        : "Checking the latest livestream status. This will update automatically."}
                </p>
              </div>
            )}
          </div>
        </section>
        <p className="mt-3 text-center text-xs uppercase tracking-[0.2em] text-brown/60" role="status" aria-live="polite">
          {live.status === "live" ? "Live now" : live.status === "reconnecting" ? "Stream interrupted. Reconnecting…" : live.status === "offline" ? "The livestream has ended" : live.status === "waiting" ? "The livestream will appear here when it starts" : "Checking livestream status…"}
          {live.stale && live.status === "live" ? " · Status may be out of date" : ""}
        </p>

        <section className="mt-10 rounded-[28px] border border-brown/10 bg-white p-5 md:p-8">
          <div className="mb-6 flex items-center justify-between gap-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-orange">
                Community
              </p>
              <h2 className="mt-2 font-serif text-2xl text-brown md:text-3xl">
                Live Chat
              </h2>
            </div>
            <span className="rounded-full border border-emerald-500/30 bg-emerald-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Online
            </span>
          </div>

          <div className="space-y-4">
            {messages.map((comment) => (
              <div key={comment.id} className="rounded-2xl border border-brown/10 bg-[#f9f5f0] p-4">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brown/80">
                    {comment.name}
                  </p>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-brown/50">
                    {comment.time}
                  </span>
                </div>
                <p className="text-brown/75 leading-relaxed">{comment.message}</p>
              </div>
            ))}
          </div>

          <form onSubmit={submitMessage} className="mt-6 space-y-4">
            <div className="grid gap-4 md:grid-cols-[180px_1fr]">
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Your name"
                className="rounded-full border border-brown/15 bg-[#f9f5f0] px-4 py-3 text-sm text-brown placeholder:text-brown/40 focus:border-brown/30 focus:outline-none"
              />

              <input
                type="text"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Leave a message for the couple"
                className="rounded-full border border-brown/15 bg-[#f9f5f0] px-4 py-3 text-sm text-brown placeholder:text-brown/40 focus:border-brown/30 focus:outline-none"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="rounded-full bg-brown px-6 py-3 text-[10px] font-bold uppercase tracking-[0.35em] text-white transition hover:bg-orange"
              >
                Send
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
