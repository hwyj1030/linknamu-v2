import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="flex flex-1 justify-center px-4 py-12 sm:py-16">
      <div className="w-full max-w-md">
        <ProfileHeader profile={profile} />

        <nav aria-label="링크 목록" className="mt-8 flex flex-col gap-3">
          {links.map((link) => (
            <LinkCard key={link.id} link={link} />
          ))}
        </nav>

        <footer className="mt-12 text-center text-xs text-slate-400">
          링크나무
        </footer>
      </div>
    </main>
  );
}
