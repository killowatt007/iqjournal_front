import { LayoutProps } from "@/app/layout";
import MainLayout from "@/components/layouts/main/MainLayout";

export default function Layout({children}: LayoutProps) {
	return (
		<MainLayout>
      {children}
    </MainLayout>
	)
}
