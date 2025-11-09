import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Index() {
  const [activeSection, setActiveSection] = useState('main');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };



  const news = [
    {
      date: '15 октября 2024',
      title: 'Начало записи на подготовительные курсы',
      description: 'Открыта регистрация на подготовительные курсы для будущих первоклассников. Занятия начнутся с 1 ноября.'
    },
    {
      date: '10 октября 2024',
      title: 'День учителя',
      description: 'В школе прошёл праздничный концерт, посвящённый Дню учителя. Ученики подготовили творческие номера.'
    },
    {
      date: '1 октября 2024',
      title: 'Новый учебный год начался',
      description: 'Торжественная линейка собрала всех учеников и учителей. Поздравляем с началом нового учебного года!'
    }
  ];

  const gallery = [
    { id: 1, alt: 'Здание школы', img: 'https://cdn.poehali.dev/projects/37d7d07f-9d8b-45c9-bc17-f534bc09f891/files/8e7cccec-6130-43d4-a081-53a5eab7c533.jpg' },
    { id: 2, alt: 'Урок в классе', img: 'https://cdn.poehali.dev/projects/37d7d07f-9d8b-45c9-bc17-f534bc09f891/files/2c9668e5-7720-49ce-b0d2-3c96a13436da.jpg' },
    { id: 3, alt: 'Спортивный зал', img: 'https://cdn.poehali.dev/projects/37d7d07f-9d8b-45c9-bc17-f534bc09f891/files/6e043a6c-841d-4416-88ae-bf601e945879.jpg' },
    { id: 4, alt: 'Библиотека' },
    { id: 5, alt: 'День знаний' },
    { id: 6, alt: 'Школьный двор' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="GraduationCap" className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold text-primary">Школа №1</span>
            </div>
            <div className="hidden md:flex space-x-6">
              {[
                { id: 'main', label: 'Главная', icon: 'Home' },
                { id: 'about', label: 'О школе', icon: 'School' },
                { id: 'news', label: 'Новости', icon: 'Newspaper' },
                { id: 'gallery', label: 'Галерея', icon: 'Images' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary font-semibold' : 'text-foreground'
                  }`}
                >
                  <Icon name={item.icon as any} size={18} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <section id="main" className="min-h-screen flex items-center bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <Badge className="mb-6 text-sm px-4 py-2" variant="outline">
                <Icon name="Sparkles" size={14} className="mr-2" />
                Образование будущего
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary">
                Школа №1
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Место, где каждый ребёнок раскрывает свой потенциал и строит успешное будущее
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" onClick={() => scrollToSection('about')} className="group">
                  <Icon name="BookOpen" size={20} className="mr-2 group-hover:rotate-12 transition-transform" />
                  Узнать больше
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('gallery')}>
                  <Icon name="Images" size={20} className="mr-2" />
                  Галерея
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                {[
                  { icon: 'Users', value: '850+', label: 'Учеников' },
                  { icon: 'User', value: '65+', label: 'Учителей' },
                  { icon: 'BookOpen', value: '35+', label: 'Предметов' }
                ].map((stat, idx) => (
                  <Card key={idx} className="animate-scale-in hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <Icon name={stat.icon as any} size={32} className="mx-auto mb-3 text-primary" />
                      <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">О школе</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Icon name="Target" size={40} className="text-primary mb-4" />
                    <h3 className="text-2xl font-semibold mb-3">Наша миссия</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Создание благоприятной образовательной среды, в которой каждый ученик может развивать свои таланты и достигать высоких результатов.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Icon name="Heart" size={40} className="text-primary mb-4" />
                    <h3 className="text-2xl font-semibold mb-3">Наши ценности</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Качественное образование, индивидуальный подход, творческое развитие, уважение к личности каждого ребёнка.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <Icon name="School" size={48} className="text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-semibold mb-4">О нашей школе</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        Школа №1 — одно из старейших и престижных образовательных учреждений города с богатой историей и традициями. 
                        Мы гордимся высоким уровнем подготовки учеников, профессиональным педагогическим коллективом и современным оснащением классов.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        В нашей школе работают кружки и секции по разным направлениям: от робототехники до театрального искусства. 
                        Каждый ученик может найти занятие по душе и развивать свои способности.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="news" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">Новости</h2>
              <div className="space-y-6">
                {news.map((item, idx) => (
                  <Card key={idx} className="hover:shadow-lg transition-all hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <Badge variant="secondary" className="text-sm">
                            <Icon name="Calendar" size={14} className="mr-2" />
                            {item.date}
                          </Badge>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>
                        <Icon name="ChevronRight" size={24} className="text-muted-foreground flex-shrink-0" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">Галерея</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {gallery.map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                      {item.img ? (
                        <img 
                          src={item.img} 
                          alt={item.alt} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <>
                          <Icon name="Image" size={48} className="text-primary/40 group-hover:scale-110 transition-transform" />
                          <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                        </>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <p className="text-sm text-muted-foreground">{item.alt}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary/5 border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <Icon name="GraduationCap" className="text-white" size={24} />
                  </div>
                  <span className="text-xl font-bold text-primary">Школа №1</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Образование для успешного будущего
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-primary">Контакты</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Icon name="Phone" size={16} />
                    <span>+7 (123) 456-78-90</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Mail" size={16} />
                    <span>info@school1.ru</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="MapPin" size={16} />
                    <span>г. Москва, ул. Школьная, 1</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-primary">Социальные сети</h4>
                <div className="flex space-x-3">
                  <Button size="icon" variant="outline">
                    <Icon name="Facebook" size={20} />
                  </Button>
                  <Button size="icon" variant="outline">
                    <Icon name="Instagram" size={20} />
                  </Button>
                  <Button size="icon" variant="outline">
                    <Icon name="Twitter" size={20} />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
              © 2024 Школа №1. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}