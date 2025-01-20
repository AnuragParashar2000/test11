export interface NewsItem {
    id: string;
    title: string;
    institution: string;
    date: string;
    category: 'exam' | 'admission' | 'college' | 'all';
    content?: string;
    image: string;
  }
  
  export type Tab = {
    id: string;
    name: string;
    category: 'all' | 'exam' | 'admission' | 'college';
  };