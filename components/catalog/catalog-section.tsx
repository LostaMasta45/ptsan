'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, Eye, X } from 'lucide-react';
import assetsManifest from '@/src/assets.manifest.json';

export function CatalogSection() {
  const [viewingCatalog, setViewingCatalog] = useState<string | null>(null);

  if (assetsManifest.catalogs.length === 0) {
    return (
      <div className="text-center py-12 px-4 border border-dashed rounded-lg">
        <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
        <h3 className="text-lg font-semibold mb-2">Belum Ada Katalog</h3>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          Tambahkan file PDF katalog ke folder{' '}
          <code className="bg-muted px-1.5 py-0.5 rounded text-xs">
            /src/assets/catalogs/
          </code>{' '}
          lalu rebuild project untuk menampilkan katalog.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {assetsManifest.catalogs.map((catalog) => (
          <Card key={catalog.file}>
            <CardHeader>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg leading-tight flex-1">
                  {catalog.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <Button
                onClick={() => setViewingCatalog(catalog.file)}
                variant="outline"
                className="w-full"
              >
                <Eye className="mr-2 h-4 w-4" />
                Lihat Katalog
              </Button>
              <Button
                asChild
                className="w-full"
              >
                <a
                  href={`/media/${catalog.file}`}
                  download={`${catalog.title}.pdf`}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Unduh PDF
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {viewingCatalog && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex flex-col"
          onClick={() => setViewingCatalog(null)}
        >
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">
              {assetsManifest.catalogs.find((c) => c.file === viewingCatalog)?.title}
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setViewingCatalog(null)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div
            className="flex-1 p-4 overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <object
              data={`/media/${viewingCatalog}`}
              type="application/pdf"
              className="w-full h-full min-h-[70vh] rounded-lg"
            >
              <iframe
                src={`/media/${viewingCatalog}`}
                className="w-full h-full min-h-[70vh] rounded-lg"
                title="Catalog PDF"
              >
                <p className="text-center py-8">
                  Browser Anda tidak mendukung tampilan PDF.{' '}
                  <a
                    href={`/media/${viewingCatalog}`}
                    className="text-primary underline"
                    download
                  >
                    Unduh PDF
                  </a>
                </p>
              </iframe>
            </object>
          </div>
        </div>
      )}
    </>
  );
}
