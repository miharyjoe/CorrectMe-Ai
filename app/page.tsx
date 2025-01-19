import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ClipboardCopy,
  FileText,
  Languages,
  WandIcon as MagicWand,
  Sparkles,
} from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="border-b bg-white/50 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <Languages className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-blue-600">AICorrecto</span>
          </div>
          <Tabs defaultValue="corrector" className="w-auto">
            <TabsList className="grid w-full grid-cols-5 lg:w-[600px]">
              <TabsTrigger value="translation">Traduction</TabsTrigger>
              <TabsTrigger value="corrector">Correcteur</TabsTrigger>
              <TabsTrigger value="context">Context</TabsTrigger>
              <TabsTrigger value="dictionary">Dictionnaire</TabsTrigger>
              <TabsTrigger value="vocabulary">Vocabulaire</TabsTrigger>
            </TabsList>
          </Tabs>
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-900">
            Correcteur français à base d&apos;IA
          </h1>
          <p className="text-muted-foreground">
            Correction d&apos;orthographe et de grammaire - améliorez votre
            style avec l&apos;IA
          </p>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <Select defaultValue="french">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="french">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🇫🇷</span> Français
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>

            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <ClipboardCopy className="mr-2 h-4 w-4" />
                Coller
              </Button>
              <Button variant="outline" size="sm">
                <FileText className="mr-2 h-4 w-4" />
                Corriger un document Word
              </Button>
            </div>
          </div>

          <Textarea
            placeholder="Écrivez ou collez votre texte ici"
            className="min-h-[200px] resize-none text-lg"
          />

          <div className="mt-6 flex items-center justify-between gap-4">
            <Button variant="link" className="text-blue-600">
              Essayez un exemple
            </Button>
            <div className="flex gap-3">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <MagicWand className="mr-2 h-4 w-4" />
                Vérifier
              </Button>
              <Button variant="secondary">
                <Sparkles className="mr-2 h-4 w-4" />
                Rephraser
              </Button>
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-sm text-muted-foreground">
          ou améliorez vos écrits en un clic avec notre{" "}
          <a href="#" className="text-blue-600 hover:underline">
            application pour Windows
          </a>
        </p>
      </main>
    </div>
  );
}
