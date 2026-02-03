import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [countdown, setCountdown] = useState(3);
  const [showCountdown, setShowCountdown] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { toast } = useToast();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setTimeout(() => setShowCountdown(false), 1000);
    }
  }, [countdown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "🚀 Сигнал принят!",
      description: "Миссия загружена. Ждём твой проект в космосе!",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e1b4b] to-[#0f172a] text-white overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-pulse-glow transition-transform duration-300"
          style={{ transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)` }}
        ></div>
        <div 
          className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse-glow transition-transform duration-500"
          style={{ transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px)` }}
        ></div>
        <div 
          className="absolute top-60 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse-glow transition-transform duration-700"
          style={{ transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)` }}
        ></div>
        <div 
          className="absolute bottom-40 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse-glow transition-transform duration-600"
          style={{ transform: `translate(${mousePosition.x * 35}px, ${mousePosition.y * 35}px)` }}
        ></div>
        <div 
          className="absolute top-1/3 right-10 w-1 h-1 bg-white rounded-full animate-pulse-glow transition-transform duration-400"
          style={{ transform: `translate(${mousePosition.x * 45}px, ${mousePosition.y * 45}px)` }}
        ></div>
        <div 
          className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse-glow transition-transform duration-800"
          style={{ transform: `translate(${mousePosition.x * 25}px, ${mousePosition.y * 25}px)` }}
        ></div>
        
        <div 
          className="absolute top-1/4 left-1/3 w-32 h-32 opacity-30 transition-transform duration-1000"
          style={{ transform: `translate(${mousePosition.x * 60}px, ${mousePosition.y * 60}px) scale(${1 + mousePosition.x * 0.1})` }}
        >
          <img src="https://cdn.poehali.dev/projects/12aeb54b-3bf9-4294-8b8f-a69bdcefa588/files/7f413c90-a0f4-461a-9855-10f5ae825ac9.jpg" alt="" className="animate-float" />
        </div>
        
        <div 
          className="absolute bottom-1/4 right-1/4 w-24 h-24 opacity-20 transition-transform duration-1200"
          style={{ transform: `translate(${mousePosition.x * -70}px, ${mousePosition.y * -70}px) rotate(${mousePosition.x * 30}deg)` }}
        >
          <img src="https://cdn.poehali.dev/projects/12aeb54b-3bf9-4294-8b8f-a69bdcefa588/files/48503be4-d52a-4542-b144-6a90a97bb7f7.jpg" alt="" className="animate-float" />
        </div>
      </div>

      <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent"></div>
        
        <div className="container mx-auto text-center relative z-10">
          {showCountdown ? (
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
              <div className="text-9xl font-heading font-bold cosmic-gradient bg-clip-text text-transparent animate-pulse-glow">
                {countdown === 0 ? 'ПОЕХАЛИ!' : countdown}
              </div>
            </div>
          ) : (
            <div className="animate-fade-in space-y-8">
              <div 
                className="relative inline-block transition-transform duration-300"
                style={{ 
                  transform: `perspective(1000px) rotateX(${mousePosition.y * 10}deg) rotateY(${mousePosition.x * 10}deg) scale(${1 + Math.abs(mousePosition.y) * 0.1})` 
                }}
              >
                <img 
                  src="https://cdn.poehali.dev/projects/12aeb54b-3bf9-4294-8b8f-a69bdcefa588/files/345817ea-4337-4114-943e-52f6a0bc405d.jpg" 
                  alt="Rocket" 
                  className="w-32 h-32 mx-auto animate-float drop-shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-transparent blur-xl"></div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
                <span className="cosmic-gradient bg-clip-text text-transparent">
                  12 апреля — Первый код в космосе
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Сегодня твоя миссия — создать Scratch-проект,
                который отправит человека в космос: от старта до возвращения
              </p>
              
              <Button 
                size="lg" 
                className="text-xl px-12 py-8 cosmic-gradient hover:opacity-90 transition-opacity font-heading font-bold"
                onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                🚀 Участвовать
              </Button>
            </div>
          )}
        </div>
      </section>

      <section id="mission" className="py-20 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <Card className="glass-effect border-2 border-purple-500/30 animate-fade-in">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Icon name="Radio" className="text-purple-400" size={32} />
                <CardTitle className="text-3xl font-heading cosmic-gradient bg-clip-text text-transparent">
                  Сообщение от Центра управления полётами
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-lg">
              <p className="leading-relaxed">
                <span className="font-mono text-green-400">&gt;&gt;</span> 12 апреля 1961 года человек впервые полетел в космос.
              </p>
              <p className="leading-relaxed">
                <span className="font-mono text-green-400">&gt;&gt;</span> Сегодня часть данных утеряна.
              </p>
              <p className="leading-relaxed font-bold text-purple-300">
                <span className="font-mono text-green-400">&gt;&gt;</span> Твоя миссия — восстановить полёт, создав интерактивный проект в Scratch.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="stages" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 cosmic-gradient bg-clip-text text-transparent">
            Этапы миссии
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Подготовка', icon: 'Settings', color: 'purple' },
              { title: 'Запуск', icon: 'Rocket', color: 'pink' },
              { title: 'Полёт', icon: 'Orbit', color: 'blue' },
              { title: 'Возвращение', icon: 'Home', color: 'green' }
            ].map((stage, idx) => (
              <Card 
                key={idx}
                className="glass-effect border-2 border-purple-500/30 hover:border-purple-500 transition-all hover:scale-105 cursor-pointer group"
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-${stage.color}-500/20 flex items-center justify-center group-hover:animate-pulse-glow`}>
                    <Icon name={stage.icon as any} size={40} className={`text-${stage.color}-400`} />
                  </div>
                  <h3 className="text-2xl font-heading font-bold">{stage.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="format" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 cosmic-gradient bg-clip-text text-transparent">
            Формат участия
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-effect border-2 border-purple-500/30 hover:border-purple-500 transition-all">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full cosmic-gradient flex items-center justify-center">
                  <span className="text-3xl">👶</span>
                </div>
                <CardTitle className="text-3xl font-heading text-center">Младшая группа</CardTitle>
                <CardDescription className="text-center text-xl text-gray-300">7–10 лет</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-400">Простая миссия с забавными персонажами и яркими эффектами</p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-2 border-pink-500/30 hover:border-pink-500 transition-all">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full cosmic-gradient flex items-center justify-center">
                  <span className="text-3xl">🧑‍🚀</span>
                </div>
                <CardTitle className="text-3xl font-heading text-center">Старшая группа</CardTitle>
                <CardDescription className="text-center text-xl text-gray-300">11–15 лет</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-400">Полноценная космическая программа с механиками и логикой</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500/20">
              <Icon name="Download" className="mr-2" />
              Скачать задания (PDF)
            </Button>
          </div>
        </div>
      </section>

      <section id="tasks" className="py-20 px-4 bg-black/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 cosmic-gradient bg-clip-text text-transparent">
            Задания
          </h2>
          
          <div className="space-y-8">
            <Card className="glass-effect border-2 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-2xl font-heading flex items-center gap-3">
                  <Icon name="CheckCircle" className="text-purple-400" />
                  Обязательная часть
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-lg">
                <p>✅ Создать ракету с анимацией запуска</p>
                <p>✅ Показать этап полёта в космосе</p>
                <p>✅ Анимировать возвращение на Землю</p>
                <p>✅ Добавить звуки и эффекты</p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-2 border-pink-500/30">
              <CardHeader>
                <CardTitle className="text-2xl font-heading flex items-center gap-3">
                  <Icon name="Sparkles" className="text-pink-400" />
                  Креативная часть
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-gray-300">
                  <strong className="text-pink-300">Ты сам решаешь</strong>, как выглядит ракета, 
                  что происходит в полёте и какие события ждут космонавта. 
                  Добавь свою фантазию! 🌟
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="form" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <img 
              src="https://cdn.poehali.dev/projects/12aeb54b-3bf9-4294-8b8f-a69bdcefa588/files/48503be4-d52a-4542-b144-6a90a97bb7f7.jpg" 
              alt="Astronaut" 
              className="w-24 h-24 mx-auto mb-6 animate-float"
            />
            <h2 className="text-4xl md:text-5xl font-heading font-bold cosmic-gradient bg-clip-text text-transparent">
              Отправить проект
            </h2>
          </div>

          <Card className="glass-effect border-2 border-purple-500/30">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-lg">Имя</Label>
                  <Input 
                    id="name" 
                    placeholder="Юрий Гагарин" 
                    required 
                    className="bg-black/40 border-purple-500/50 text-white placeholder:text-gray-500"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="age" className="text-lg">Возраст</Label>
                    <Input 
                      id="age" 
                      type="number" 
                      placeholder="10" 
                      required 
                      className="bg-black/40 border-purple-500/50 text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="class" className="text-lg">Класс</Label>
                    <Input 
                      id="class" 
                      placeholder="5А" 
                      required 
                      className="bg-black/40 border-purple-500/50 text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="school" className="text-lg">Школа</Label>
                  <Input 
                    id="school" 
                    placeholder="МБОУ СОШ №1" 
                    required 
                    className="bg-black/40 border-purple-500/50 text-white placeholder:text-gray-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="region" className="text-lg">Регион</Label>
                  <Input 
                    id="region" 
                    placeholder="Москва" 
                    required 
                    className="bg-black/40 border-purple-500/50 text-white placeholder:text-gray-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="link" className="text-lg">Ссылка на Scratch-проект</Label>
                  <Input 
                    id="link" 
                    type="url" 
                    placeholder="https://scratch.mit.edu/projects/..." 
                    required 
                    className="bg-black/40 border-purple-500/50 text-white placeholder:text-gray-500"
                  />
                </div>

                <div className="flex items-start space-x-3 py-4">
                  <Checkbox id="agreement" required className="border-purple-500" />
                  <label htmlFor="agreement" className="text-sm text-gray-300 leading-relaxed cursor-pointer">
                    Согласен на обработку персональных данных и участие в конкурсе
                  </label>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-xl py-6 cosmic-gradient hover:opacity-90 transition-opacity font-heading font-bold"
                >
                  🚀 Отправить проект
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="results" className="py-20 px-4 bg-black/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 cosmic-gradient bg-clip-text text-transparent">
            Галерея проектов
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <Card 
                key={idx}
                className="glass-effect border-2 border-purple-500/30 hover:border-purple-500 transition-all hover:scale-105 cursor-pointer overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex items-center justify-center">
                  <img 
                    src="https://cdn.poehali.dev/projects/12aeb54b-3bf9-4294-8b8f-a69bdcefa588/files/7f413c90-a0f4-461a-9855-10f5ae825ac9.jpg" 
                    alt="Planet" 
                    className="w-20 h-20 animate-float"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-heading font-bold text-lg mb-1">Проект #{idx}</h3>
                  <p className="text-sm text-gray-400">Космонавт Иван, 10 лет</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 cosmic-gradient bg-clip-text text-transparent">
            Часто задаваемые вопросы
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="glass-effect border border-purple-500/30 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-heading hover:text-purple-400">
                Как участвовать в конкурсе?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Создайте проект в Scratch по заданию, затем заполните форму на этой странице и отправьте ссылку на ваш проект.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="glass-effect border border-purple-500/30 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-heading hover:text-purple-400">
                Какие призы ждут победителей?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Победители получат дипломы, космические сувениры и возможность увидеть свой проект в галерее лучших работ!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="glass-effect border border-purple-500/30 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-heading hover:text-purple-400">
                До какого числа можно отправить проект?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Приём проектов открыт до 20 апреля 2026 года включительно.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="glass-effect border border-purple-500/30 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-heading hover:text-purple-400">
                Можно ли участвовать командой?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Да! Можно создавать проект вместе с друзьями. Укажите всех участников при отправке.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-black/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 cosmic-gradient bg-clip-text text-transparent">
            Контакты
          </h2>
          
          <Card className="glass-effect border-2 border-purple-500/30">
            <CardContent className="p-8 space-y-4">
              <div className="flex items-center justify-center gap-3">
                <Icon name="Mail" className="text-purple-400" size={24} />
                <a href="mailto:space@scratch-contest.ru" className="text-xl hover:text-purple-400 transition-colors">
                  space@scratch-contest.ru
                </a>
              </div>
              
              <div className="flex items-center justify-center gap-3">
                <Icon name="Phone" className="text-pink-400" size={24} />
                <a href="tel:+79991234567" className="text-xl hover:text-pink-400 transition-colors">
                  +7 (999) 123-45-67
                </a>
              </div>

              <div className="flex items-center justify-center gap-3">
                <Icon name="Globe" className="text-blue-400" size={24} />
                <a href="#" className="text-xl hover:text-blue-400 transition-colors">
                  scratch-contest.ru
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-purple-500/30">
        <div className="container mx-auto text-center space-y-4">
          <p className="text-gray-400">
            Детские онлайн-соревнования по Scratch «Первый код в космосе»
          </p>
          <p className="text-gray-500 text-sm">
            12 апреля 2026 — День космонавтики 🚀
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;