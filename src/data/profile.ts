// 페이지에 표시할 프로필과 링크 목록입니다.
// 링크 주소는 예시이니 실제 주소로 바꿔서 사용하세요.

export type LinkItem = {
  id: string;
  title: string;
  url: string;
  description?: string;
};

export type Profile = {
  name: string;
  bio: string;
  /** 프로필 사진 경로 (public/ 기준). 비워 두면 이름 첫 글자로 원형 아바타를 그립니다. */
  avatarUrl?: string;
};

export const profile: Profile = {
  name: "김클로",
  bio: "세계 최강 바이브코더",
};

export const links: LinkItem[] = [
  {
    id: "github",
    title: "GitHub",
    url: "https://github.com/",
    description: "만든 코드와 프로젝트",
  },
  {
    id: "blog",
    title: "블로그",
    url: "https://blog.naver.com/",
    description: "개발 기록과 회고",
  },
  {
    id: "instagram",
    title: "Instagram",
    url: "https://www.instagram.com/",
    description: "일상과 사진",
  },
  {
    id: "youtube",
    title: "YouTube",
    url: "https://www.youtube.com/",
    description: "바이브코딩 영상",
  },
];
