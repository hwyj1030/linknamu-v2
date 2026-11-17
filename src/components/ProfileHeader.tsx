import type { Profile } from "@/data/profile";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  const initial = profile.name.charAt(0);

  return (
    <header className="flex flex-col items-center text-center">
      {profile.avatarUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={profile.avatarUrl}
          alt={`${profile.name} 프로필 사진`}
          className="h-24 w-24 rounded-full object-cover shadow-lg ring-4 ring-white"
        />
      ) : (
        <div
          aria-hidden="true"
          className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-sky-300 to-sky-600 text-4xl font-bold text-white shadow-lg ring-4 ring-white"
        >
          {initial}
        </div>
      )}

      <h1 className="mt-5 text-2xl font-bold tracking-tight text-slate-800">
        {profile.name}
      </h1>
      <p className="mt-1.5 text-base text-slate-500">{profile.bio}</p>
    </header>
  );
}
