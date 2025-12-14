"use client";

interface SlowConnectionNotificationSimpleProps {
  isSlow: boolean;
}

export function SlowConnectionNotification({ 
  isSlow 
}: SlowConnectionNotificationSimpleProps) {
  if (!isSlow) return null;

  return (
    <div className="animate-in fade-in-50 slide-in-from-top-4 m-5">
      <div className="bg-bkg-amber border border-amberBorderLight rounded-lg p-3 flex items-center justify-center gap-2 shadow-sm">
        <div className="relative">
          <div className="w-4 h-4 rounded-full border-2 border-amberBorder opacity-20" />
          <div className="absolute top-0 left-0 w-4 h-4 rounded-full border-2 border-amberBorder border-t-transparent animate-spin" />
        </div>
        <span aria-label="slow-connection-notification" className="text-loadingOrange text-sm font-medium">
          Loading is taking longer than usual...
        </span>
      </div>
    </div>
  );
}