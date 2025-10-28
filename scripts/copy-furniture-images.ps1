$basePathNew = "C:\Users\user\Music\SAN\public\media\portfolio\furniture\NEW"
$basePathDest = "C:\Users\user\Music\SAN\public\media\portfolio\furniture"

$folders = @(
    "0308-40-vanity_14-07-2025",
    "NEO 01-0103-260 - Langford Lounge Chair",
    "NEO 01-0105-77 - BED BOUCLE BENCH",
    "NEO-01-01-01-232-ALBERTO-DINING-CHAIR_25-07-2025",
    "NEO-01-0101-236---The-Roadie-Rustic-Teak-Dining-Chair---29-07-2025",
    "NEO-01-0101-237-BODERIE-AMISH_26-07-2025",
    "NEO-01-0102-42-JEAN-LUC-TEAK-AL-AIRE-LIBRE_15-07-2025",
    "NEO-01-0103-245---Honfleur-Seagrass-Swivel-Lounge-Chair---28-07-2025",
    "NEO-01-0103-246---CHEVRON-ARM-CHAIR_Revision-1",
    "NEO-01-0105-81---LONG-BENCH-WITH-STORAGE-Revision-2",
    "NEO-01-0117-111---BAR-STOOL",
    "NEO-01-0118-13 ARM CHAIR REV_29-07-2025",
    "NEO-01-0202-183---PATIO-SET-TABLE-Revision-1",
    "NEO-01-0204-163---Custom-Samara-Coffee-Table-in-Smoked-Black",
    "NEO-02-0109-04---PATIO-SET-PARASOL-31-07-2025"
)

foreach ($folder in $folders) {
    Write-Host "Processing: $folder" -ForegroundColor Cyan
    
    $sourcePath = Join-Path $basePathNew $folder
    $destPath = Join-Path $basePathDest $folder
    
    if (-not (Test-Path $sourcePath)) {
        Write-Host "  Source not found, skipping..." -ForegroundColor Yellow
        continue
    }
    
    if (-not (Test-Path $destPath)) {
        Write-Host "  Creating destination folder..." -ForegroundColor Yellow
        New-Item -ItemType Directory -Path $destPath -Force | Out-Null
    }
    
    $files = Get-ChildItem -Path $sourcePath -Filter "*.jpg" | Sort-Object Name
    
    if ($files.Count -ge 4) {
        Copy-Item -Path $files[0].FullName -Destination (Join-Path $destPath "render.jpg") -Force
        Write-Host "  Copied: render.jpg" -ForegroundColor Green
        
        Copy-Item -Path $files[1].FullName -Destination (Join-Path $destPath "construction-1.jpg") -Force
        Write-Host "  Copied: construction-1.jpg" -ForegroundColor Green
        
        Copy-Item -Path $files[2].FullName -Destination (Join-Path $destPath "construction-2.jpg") -Force
        Write-Host "  Copied: construction-2.jpg" -ForegroundColor Green
        
        Copy-Item -Path $files[3].FullName -Destination (Join-Path $destPath "construction-3.jpg") -Force
        Write-Host "  Copied: construction-3.jpg" -ForegroundColor Green
    } else {
        Write-Host "  Not enough files (found $($files.Count)), skipping..." -ForegroundColor Red
    }
    
    Write-Host ""
}

Write-Host "All files copied successfully!" -ForegroundColor Green
