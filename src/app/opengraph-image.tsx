import { ImageResponse } from 'next/og'
import { heroMetrics } from '@/content/hero'

export const runtime = 'nodejs'
export const alt = 'Prathamesh Kulkarni — AI Analytics Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

async function fetchGoogleFont(family: string, weight: number): Promise<ArrayBuffer> {
  // No browser User-Agent → Google Fonts serves TTF (compatible with satori/ImageResponse).
  // A Chrome UA would return woff2, which satori does not support.
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&display=swap`,
  ).then((res) => res.text())

  const match = css.match(/url\((https:\/\/fonts\.gstatic\.com[^)]+)\)/)
  if (!match) throw new Error(`Could not parse font URL for ${family}:${weight}`)

  return fetch(match[1]).then((res) => res.arrayBuffer())
}

export default async function OGImage() {
  const spaceGroteskBold = await fetchGoogleFont('Space+Grotesk', 700)
  const spaceGroteskRegular = await fetchGoogleFont('Space+Grotesk', 400)

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#111111',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Cyan accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: '#06b6d4',
          }}
        />

        {/* Name */}
        <div
          style={{
            fontFamily: 'Space Grotesk',
            fontWeight: 700,
            fontSize: '72px',
            color: '#f9fafb',
            lineHeight: 1.1,
            marginBottom: '20px',
            letterSpacing: '-0.02em',
          }}
        >
          Prathamesh Kulkarni
        </div>

        {/* Title */}
        <div
          style={{
            fontFamily: 'Space Grotesk',
            fontWeight: 400,
            fontSize: '36px',
            color: '#06b6d4',
            marginBottom: '48px',
            letterSpacing: '-0.01em',
          }}
        >
          AI Analytics Engineer
        </div>

        {/* Metric strip */}
        <div
          style={{
            display: 'flex',
            gap: '40px',
          }}
        >
          {heroMetrics.map((metric) => (
            <div
              key={metric.label}
              style={{
                fontFamily: 'Space Grotesk',
                fontWeight: 400,
                fontSize: '20px',
                color: '#6b7280',
              }}
            >
              {metric.value ? `${metric.value} ${metric.label}` : metric.label}
            </div>
          ))}
        </div>

        {/* Domain */}
        <div
          style={{
            position: 'absolute',
            bottom: '48px',
            right: '80px',
            fontFamily: 'Space Grotesk',
            fontWeight: 400,
            fontSize: '20px',
            color: '#374151',
          }}
        >
          prathameshkulkarni.com
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Space Grotesk',
          data: spaceGroteskBold,
          weight: 700,
          style: 'normal',
        },
        {
          name: 'Space Grotesk',
          data: spaceGroteskRegular,
          weight: 400,
          style: 'normal',
        },
      ],
    },
  )
}
