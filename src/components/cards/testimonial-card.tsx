import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

type TestimonialCardProps = {
  quote: string;
  name: string;
  company: string;
  avatar: string;
  avatarFallback: string;
};

const TestimonialCard = ({ quote, name, company, avatar, avatarFallback }: TestimonialCardProps) => {
  return (
    <Card className="h-full bg-card border border-border/50 flex flex-col">
      <CardContent className="p-6 flex flex-col justify-between h-full">
        <div className="flex-grow">
          <Quote className="w-8 h-8 text-primary/50 mb-4" />
          <blockquote className="text-muted-foreground italic">"{quote}"</blockquote>
        </div>
        <div className="flex items-center gap-4 mt-6 pt-6 border-t border-border/50">
          <Avatar>
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{avatarFallback}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-primary-foreground">{name}</p>
            <p className="text-sm text-muted-foreground">{company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
